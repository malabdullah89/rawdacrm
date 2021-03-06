import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../firebase'

function NewSub() {



    const [shareholders, setShareholders] = useState([]);

    const ref = firebase.firestore().collection("shareholders");

    const [textInput, setTextInput] = React.useState('');

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }



    function getShareholders() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                console.log(doc.data())
            });

            setShareholders(items);
        })

    }

    useEffect(() => {

        getShareholders();

    }, [])




    return (

        <Container>
            <h4>اشتراك جديد ( البرنامج الصيفي 2021 )</h4>
            <form>
                <h5>بيانات المساهم</h5>
                <h6>الرقم المدني</h6>
                <input type="number" onChange={handleChange} placeholder="ادخل الرقم المدني"></input>

            </form>


            {shareholders.map((shareholder) => {
                if (shareholder.civilNumber === textInput) {
                    return (
                        <div key={shareholder.civilNumber}>

                            <form>
                                <h6> الأسم</h6>
                                <Result readOnly="true"  value={shareholder.shareholderName}></Result>
                                <h6> رقم الصندوق</h6>
                                <Result readOnly="true" value={shareholder.shareholdingNum}></Result>
                                <h6> رقم الهاتف</h6>
                                <Result placeholder="رقم الهاتف"></Result>
                                <br></br>
                                <hr></hr>
                                <h6> الاشتراك</h6>
                                <ServicesMenu>
                                    <option value="volvo">يرجى اختيار الاشتراك ...</option>
                                    <option value="volvo">اشتراك اوكسجين 3 شهور</option>
                                    <option value="saab">اشتراك اوكسجين 6 شهور</option>
                                    <option value="opel">اشتراك اوكسجين سنة</option>
                                    <option value="audi">اشتراك bein sport</option>
                                </ServicesMenu>
                            </form>

                            <br></br>
                            <hr></hr>
                            <h5>طريقة الدفع</h5>
                            

                            <PaymentSection>
                               
                                <label for="male">نقدا
                                <input type="radio" id="cash" name="payment" value="cash"></input>
                                <span class="checkmark"></span>

                                </label>
                               
                                
                                
                                <label for="male">K-NET<span><img width="25px" src="https://nalbes.com/assets/icons/Knet.png" /></span>
                                <input type="radio" id="cash" name="payment" value="cash"></input>
                                <span class="checkmark"></span>
                                </label>
                              

                              
                            </PaymentSection>

                            <button>تسجيل</button>
                        </div>
                    )

                }

            })}


        </Container>
    )

}





export default NewSub

const Container = styled.div`
  
    text-align: center; 
    margin-right: 20px;
    width: 100vw;
    padding: 50px 0px;
    margin: auto;
    margin-top: 20px;
    border: none;
    border-radius: 50px;
    margin-bottom: 20px;
    box-shadow: rgb(0 0 0 / 30%) 0px 40px 58px -16px,
    rgb(0 0 0 / 30%) 0px 30px 22px -10px;

    button {
        width: 50%;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 20px;
        border: none;
        border-radius: 20px;
        background: #1b4285;
        color: white;
        font-size: 20px;
        &:hover {

            box-shadow: rgb(0 0 0 / 30%) 0px 40px 58px -16px,
            rgb(0 0 0 / 30%) 0px 30px 22px -10px;
            transform: scale(1.05);

        }
       
       
    }

  
    h4 {
        font-size: 30px;
        color: #1b4285;
    }
    
    form {
        
        input {
            
            width: 300px;
            height: 45px;
            border: 1px solid #1b4285;
            border-radius: 50px;
            color: #1b4285;
            text-align: center;
            font-size: 18px;
            -moz-appearance: textfield;
           
            &:focus {
                outline: none;
                border: 2px solid  #1b4285;
                box-shadow: rgb(0 0 0 / 30%) 0px 40px 58px -16px,
                rgb(0 0 0 / 30%) 0px 30px 22px -10px;
                transform: scale(1.05);
                

            }

        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
                     -webkit-appearance: none;
                        margin: 0;
}


input[type=number] {
  -moz-appearance: textfield;
}

        

        span {
            
            margin-left: 20px;
            margin-right: 10px;
            color: #1b4285;
            font-weight: bold;
             
        }
    }
`


const Result = styled.input`

            
            height: 45px;
            border: 1px solid #1b4285;
            border-radius: 50px;
            color: #1b4285;
            text-align: center;
            font-size: 18px;
           
            

`

const ServicesMenu = styled.select`
            width: 350px;
            height: 45px;
            border: 1px solid #1b4285;
            border-radius: 50px;
            color: #1b4285;
            font-size: 18px;
            -webkit-appearance: none;
            padding: 0px 8px;


            option {
                
                
                
            }
           


            &:focus {
                outline: none;
                border: 2px solid  #1b4285;
                box-shadow: rgb(0 0 0 / 30%) 0px 40px 58px -16px,
                rgb(0 0 0 / 30%) 0px 30px 22px -10px;
                transform: scale(1.05);
                

            }


`

const PaymentSection = styled.div`
            margin: auto;
            

            label {
                display: flex-inline;
                justify-content: center;
                padding: 0px 5px;
               
               span {
                    
                   
                  img {
                    vertical-align:middle
                    
                    
                   
                  }
               }
            }
`