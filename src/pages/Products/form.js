import {Heading,Stack,Box,Button,Input } from '@chakra-ui/react'
import {Checkbox,Radio } from 'antd';
import { StarTwoTone,SearchOutlined } from '@ant-design/icons';
import  "./style.css"
export default()=>(

    
   <div className='scroolbarım' >
  
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Marka</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"30px"}>
  <Checkbox >
    Asus
  </Checkbox>
  <Checkbox>
    Acer
  </Checkbox>
  <Checkbox >
    Dell
  </Checkbox>
  <Checkbox>
    Lenovo
  </Checkbox>
  <Checkbox >
    MSI
  </Checkbox>
  <Checkbox>
    HP
  </Checkbox>
  <Checkbox >
    Apple  
  </Checkbox>
  <Checkbox>
    Monster
  </Checkbox>
  <Checkbox>
    Lenovo
  </Checkbox>
  <Checkbox >
    MSI
  </Checkbox>
  <Checkbox>
    HP
  </Checkbox>
  <Checkbox >
    Apple  
  </Checkbox>
  <Checkbox>
    Monster
  </Checkbox>
</Stack>
</Box>

<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Fiyat Aralığı</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
    
    4900-1200 TL
  </Radio>
  <Radio>
  4900-11999 TL
  </Radio>
  <Radio >
  12000-15999 TL
  </Radio>
  <Radio>
  16000-19999 TL
  </Radio>
  <Radio >
  20000-24999 TL
  </Radio>
  <Radio>
  25000-34999 TL
  </Radio>
  <Radio >
  35000-49999 TL  
  </Radio>
  <Radio>
    50000-75000 TL
  </Radio>
</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbarr">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Değerlendirme Aralığı</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
     <StarTwoTone twoToneColor="#FF7F00" />
    4 yıldız üzeri
  </Radio>
  <Radio>
  <StarTwoTone twoToneColor="#FF7F00" />
  3 yıldız üzeri
  </Radio>
  <Radio >
  <StarTwoTone twoToneColor="#FF7F00" />
  2 yıldız üzeri
  </Radio>
  <Radio>
  <StarTwoTone twoToneColor="#FF7F00" />
  1 yıldız üzeri
  </Radio>

</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>İşlemci Tipi</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Checkbox >
    Intel Core i9
  </Checkbox>
  <Checkbox>
  Intel Core i7
  </Checkbox>
  <Checkbox >
  Intel Core i5
  </Checkbox>
  <Checkbox>
  Intel Core i3
  </Checkbox>
  <Checkbox >
  Intel Celeron
  </Checkbox>
  <Checkbox>
  Intel Pentium
  </Checkbox>
  <Checkbox >
  Intel Atom  
  </Checkbox>
  <Checkbox>
    AMD Ryzen 5
  </Checkbox>
  <Checkbox>
    AMD Ryzen 3
  </Checkbox>
</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Ram (Sistem Belleği)</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
    
    16 GB
  </Radio>
  <Radio>
  32 GB
  </Radio>
  <Radio >
  12 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Ram (Sistem Belleği)</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
    
    16 GB
  </Radio>
  <Radio>
  32 GB
  </Radio>
  <Radio >
  12 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Ram (Sistem Belleği)</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
    
    16 GB
  </Radio>
  <Radio>
  32 GB
  </Radio>
  <Radio >
  12 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
</Stack>
</Box>
<br/>
<hr/>
<Box className="scroolbar">
    <Heading ml={"15px"} mt={"20px"} textAlign={"start"}  fontSize={14}>Ram (Sistem Belleği)</Heading>
    <Box textAlign={"start"} ml={"10px"}>
    <Input 
    mt={"20px"}
      placeholder="input search text"
      width={"150px"}
      borderRadius={"0px 0px 0px 5px"}
      height={"35px"}
    />
    <Button height={"35px"} mb={"6px"} borderRadius={"0px 50px 30px 0px"} width={"40px"} colorScheme='tomato' ><SearchOutlined style={{color:"white"}} /></Button>
    </Box>
    <Stack ml={"15px"} spacing={4} mt={"40px"}>
  <Radio >
    
    16 GB
  </Radio>
  <Radio>
  32 GB
  </Radio>
  <Radio >
  12 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
  <Radio>
  8 GB
  </Radio>
  <Radio >
  4 GB
  </Radio>
  <Radio>
  30 GB
  </Radio>
  <Radio >
  40 GB 
  </Radio>
  <Radio>
  2 GB
  </Radio>
</Stack>
</Box>
<br/>
<hr/>



</div> 


)