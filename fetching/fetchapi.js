 const url  = 'https://jsonplaceholder.typicode.com/posts'

function getddata(){
      const promiseobj=  fetch('data.txt')

      promiseobj.then((res)=>{ return res.text()}).then((data)=>{console.log(data)})
}


// function getddata(){
//     const promiseobj=  fetch('dataq.txt')

//     promiseobj.then((res)=>{ 
      
//          if(!res.ok){
//             throw Error(res.status) 
//          }
//         return res.text()
    
//     })
        
        
//         .then((data)=>{console.log(data)})
// }

// function getddata(){
//     const promiseobj=  fetch('data.txt')

//     promiseobj.then((res)=>{ 
      
    
//         return res.text()
    
//     })
        
        
//         .then((data)=>{
            
//             console.log(data)
//           document.getElementById('he').innerText=data
//         })
// }

//  async function getddata(){
//        const res = await  fetch('data.txt')
//      const data=  await res.text();
//      console.log(data)
// }



//  async function getddata(){
//     try {
//         const res = await fetch('dataa.txt');
//         if (!res.ok) {
//             throw new Error(`Errorddddddddd: ${res.status}`);
//         }
//         const data = await res.text();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }


async function getddata(){
    try {
        const res = await fetch('data.txt');
        if (!res.ok) {
            throw new Error(`Errorddddddddd: ${res.status}`);
        }
        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}



function getddata(){
    const promiseObj = fetch('dastajson.json');

    promiseObj
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erroreee: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log(data.name);
        })
        .catch(error => {
            console.error(error);
        });
}
