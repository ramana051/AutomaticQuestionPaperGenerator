import React, {useState} from 'react'

const Practice = () => {
const [data,setData]=useState({name:'',mail:'',password:'',cpassword:''});

const onchangeHandler=(e)=>{
    
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler=(e)=>{
    e.preventDefault();
    console.log(data.name)
    if(data.email==sessionStorage.getItem('email')){
    alert('user already exsist')

    }
    else if(data.password!=data.cpassword){
        alert('password mis-match')
    }
    else{
    }
    sessionStorage.setItem('email',data.email);
    sessionStorage.setItem('password',data.cpassword)
    sessionStorage.setItem('name',data.name);
    alert('submitted')
}

    return (
        <>
            <nav className='nav'>

                {/* <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a> */}
                <button>home</button>
                <button>home</button>
                <button>home</button>
                <button>home</button>
                <button>home</button>



            </nav>
            <div className='col-12 d-flex'>
                <div className='col-4'></div>
                <div className='col-4 box border BORDER BORDER'>
                    <h1>SUBMIT FORM</h1>

                    <div className='col-12 d-flex'>
                        <div className='col-4 details'>
                            <div className='mt-5 '>
                                name
                            </div>
                            <div className='mt-5 '>
                                name
                            </div>
                            <div className='pt-5'>
                                name
                            </div>
                            <div className='p-5'>
                                name
                            </div>
                        </div>

                        <div className='col-8 d-flex'>
                            <form action="" className='form' onSubmit={submitHandler}>
                                <input type="text" className='mt-5 mb-5 me-5' placeholder='name' name='name' onChange={onchangeHandler}required/>
                                <input type="email" className='mb-5 me-5'placeholder='email'name='email'onChange={onchangeHandler}required/>
                                <input type="password" className='mb-5 me-5' placeholder='password'name='passowrd  'onChange={onchangeHandler}required/>
                                <input type="password" className='mb-5 me-5' placeholder=' re-enter password'name='cpassowrd'onChange={onchangeHandler}required/>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>

                </div>
                <div className='col-4'></div>

            </div>
        </>
    )
}

export default Practice