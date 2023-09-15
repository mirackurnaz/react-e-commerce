import {useMemo} from "react";
import { useQuery,useMutation, useQueryClient } from '@tanstack/react-query' //query
import { Spinner,Flex, Heading,Button, Box } from "@chakra-ui/react";
import { fetchAllProducts,deleteProduct } from "../../../api";
import {Table,Popconfirm} from "antd"
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

function AdminProducts() {

	const deleteMutation=useMutation(deleteProduct,{
		refetchQueries:["admin:product"]   //silindiğinde sayfayı yenilemeden direkt tablodan silinsin(QueryClient ada ihtiyac var bunun için)
	});    //silme işlemi admin alanında
	const queryClient=useQueryClient(); //gerekli query clientı alalılım
	const columns = useMemo(()=>{
	return[
		{
		  title: 'Computer Models',
		  dataIndex: 'title',
		  key: 'title',
		},
		{
		  title: 'Price',
		  dataIndex: 'price',
		  key: 'price',
		},{
			title: 'Action',
			key: 'action',
			render:(text,record)=> //butonlar düzenleme silme yapabilcğimiz kod 
			<>
			<Link to={`/admin/products/${record._id}`}><EditOutlined style={{ color: 'teal' }}/></Link>
			<Popconfirm 
			title="Are you sure to delete this task?"
			onConfirm={()=>{
				deleteMutation.mutate(record._id,{     //(record._id,{onSucses} hangi satırdaysan(record._id) ve onayladıysan onu sil({onSucses})
					onSuccess:()=>{
						queryClient.invalidateQueries("admin:products") //queryclientla(admin:products)keyini yakaladım ve silme işleminden sonra sayfa yenilenmeden silmesini sağladım 
					}
				})
			}}
			onCancel={()=>{
				console.log("iptal edildi");}}
			okText="Yes"
			cancelText="No">
			<button><DeleteOutlined style={{ color: 'red', marginLeft:"15px" }}/></button>
			</Popconfirm>
			</>
		  },
		
		]
			},[]);

	const {isLoading,isError,data,error}=useQuery(["admin:products"], ()=> fetchAllProducts ())

	if (isLoading) {
		return (
			<Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
				<Spinner
					thickness="4px"
					speed="0,65s"
					emptyColor="gray.200"
					size={"xl"}
					color={"red.500"}
				/>
			</Flex>
		);
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}
	console.log(data);
	return <div>
		<Flex  justifyContent={"space-between"} >
			
		<Heading color={"tomato"} alignItems={"center"} ml={"850px"}  fontSize={28}>Products</Heading>
		<Link to="/admin/products/new">          
		<Button mr={"15px"}>New Product</Button>
		</Link>
		</Flex>
		<Table style={{marginTop:"20px"}} dataSource={data} columns={columns}></Table> 
	</div>;
}

export default AdminProducts;
//1)<Table dataSource={data} columns={columns}></Table>  ürnler data olarak geliyo zaten direkt çektik
//2) usememo kullnam sebebim colums un sürekli derleme yapmsının önüne geçmek