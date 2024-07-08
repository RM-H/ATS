import {useEffect} from "react";

const Notfound = () => {

    useEffect(() => {
        "use strict";
        let $ = document
        let boxS = 20
        let numberOfWidthBox = Number(window.innerWidth / boxS)
        let numberOfHeghtBox = Number(window.innerHeight / boxS)
        let numberOfBox = numberOfWidthBox * numberOfHeghtBox

        window.addEventListener('load', event => {
            numberOfBoxToGen()
        })
        window.addEventListener('resize', event => {
            numberOfWidthBox = Number(window.innerWidth / boxS)
            numberOfHeghtBox = Number(window.innerHeight / boxS)
            numberOfBox = numberOfWidthBox * numberOfHeghtBox
            numberOfBoxToGen()
        })

        function numberOfBoxToGen() {
            for (let i = 0; i < (numberOfBox); i++) {
                boxGeneraor()
            }
        }

        function boxGeneraor() {
            let box = $.createElement('div')
            box.classList.add('boxd')
            $.querySelector('.big').appendChild(box)
        }
    }, []);


    return (
        <>

            <div className="big">
                <div className="clrseventext  "
                     style={{position: 'absolute', top: '40%', left: '25dvw', width: '50dvw', borderRadius: '0.3rem'}}>

                    <p className="has-text-centered clrtwotext is-size-3-desktop is-size-5 has-text-weight-bold">

                        Error 404
                        <br/>
                        صفحه مورد نظر شما یافت نشد !
                    </p>

                </div>

            </div>


            {/*<div className='columns m-0 p-5' style={{*/}
            {/*    height: '100dvh',*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center',*/}
            {/*    backgroundImage: 'url(/assets/images/wallpaper.png)',*/}
            {/*    backgroundRepeat: 'no-repeat',*/}
            {/*    backgroundSize: 'cover'*/}

            {/*}}>*/}
            {/*    <div className='column is-12 clrseventext is-flex is-align-items-center is-justify-content-center'*/}
            {/*         style={{*/}
            {/*             minHeight: '10rem',*/}
            {/*             backgroundColor: 'rgba(0,0,0,0.69)',*/}


            {/*             backdropFilter: 'blur(0.1rem)',*/}
            {/*             borderRadius: '0.6rem'*/}
            {/*         }}>*/}
            {/*        <p className='yekan-regular has-text-centered is-size-4 has-text-weight-bold clrfourtext'>*/}
            {/*            صفحه مورد نظر شما یافت نشد !*/}
            {/*        </p>*/}

            {/*    </div>*/}

            {/*</div>*/}


        </>


    )
}
export default Notfound;