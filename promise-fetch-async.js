/*const promise = new Promise((
    resolve, reject) =>{
        setTimeout(()=> {
            reject('işlem başarılı')
        }, 1500)
       
    } )

    promise.then((data)=>{
        console.log(data)
    }).catch(
        err =>{
            console.warn(err)
        }
    )
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
        
    fetch(API_URL).then(res => res.json()).then(data => console.log(data))
    
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
        async function getPosts(){
            const response = await fetch(API_URL)
            const data = await response.json()
            console.log(data)
        }
        getPosts()
*/



        