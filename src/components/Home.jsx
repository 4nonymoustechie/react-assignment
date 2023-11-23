

const Home = () => {

 const merisWealth = "Mersitem Wealth Maintain your lifestyle even when you retire"
 const forMerisWealth = merisWealth.split(" ")


 const forLineImg =  [ 'Invest' ,'Stock trading' ,'Estates & Trustees '  ,  'Financial Advisory ' , 'Wealth management ' , 'Registrars & Probate' , 'Loans & leases ']









    return(
        <div>
        <div className="impart">
                    <h1 id="move">
                        {`${forMerisWealth[0]} ${forMerisWealth[1]}`} <br/>
                        {`${forMerisWealth[2]} ${forMerisWealth[3]} ${forMerisWealth[4]} `} <br/>
                        {`${forMerisWealth[5]} ${forMerisWealth[6]} ${forMerisWealth[7]} ${forMerisWealth[8]} `} <br/>

                    </h1><br/>
                    <div className="learn">
                        <h2 id="move1">Learn more <img id="arrow" src="" alt="src\assets\imgs\dark_arrow.svg" /></h2>
                    </div>
            
                    <section className="down">
                        <img className="ico" src="src\assets\icons\1.svg" alt="" />
                        <img className="ico" src="src\assets\icons\2.svg" alt="" />
                        <img className="ico" src="src\assets\icons\3.svg" alt="" />
                        <img className="ico" src="src\assets\icons\4.svg" alt="" />
                        <img className="ico" src="src\assets\icons\5.svg" alt="" />
                        <img className="ico" src="src\assets\icons\6 (2).png" alt="" />
                        <img className="ico" src="src\assets\icons\7.svg" alt="" />
                            <ul className="iclist">
                                <li className="long"> {forLineImg[0]}</li>
                                <li className="long">{forLineImg[1]}</li>
                                <li className="long">{forLineImg[2]}</li>
                                <li className="long">{forLineImg[3]}</li>
                                <li className="long">{forLineImg[4]}</li>
                                <li className="long">{forLineImg[5]}</li>
                                <li className="long">{forLineImg[6]}</li>
                            </ul>
                        
                    </section>
                    </div>
                    </div>
      )
           
}
export default Home 