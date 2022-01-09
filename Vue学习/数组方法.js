const arr =[1,2,3,4]
      let acc
      arr.forEach((val,index,array)=>{
        acc+=val
      })
      const acc2 =  arr.reduce((acc,val,idnex,arr)=>{

        return acc*val;
      },0)

      const arr2 = [];
      arr.forEach((val,index,array)=>{
        arr2.push(val*val);
      })
      const arrNew =arr.map((val,index,array)=>{
        return val*val
      })
      const arr3= arr.reduce((acc,val,index,array)=>{
        acc.push(val*val)
        return acc
      },[])

      const map = {};
      arr.forEach((val,index,array)=>{
        map[index]=val;
      })

      const map2 = arr.reduce((prev,curr2,index,array)
      =>{
        acc[index]=val;
        return acc
      },{})