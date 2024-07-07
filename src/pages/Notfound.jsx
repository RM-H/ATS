const Notfound = () => {
    return (
        <>


            <div className='columns m-0 p-5' style={{
                height: '100dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(/assets/images/wallpaper.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'

            }}>
                <div className='column is-12 clrseventext is-flex is-align-items-center is-justify-content-center'
                     style={{
                         minHeight: '10rem',
                         backgroundColor: 'rgba(0,0,0,0.69)',


                         backdropFilter: 'blur(0.1rem)',
                         borderRadius: '0.6rem'
                     }}>
                    <p className='yekan-regular has-text-centered is-size-4 has-text-weight-bold clrfourtext'>
                        صفحه مورد نظر شما یافت نشد !
                    </p>

                </div>

            </div>


        </>


    )
}
export default Notfound;