function header() {
    return ( <>
        <div id="header" style={{height: '20rem' } } className="bg-primary">
            <div id="header-background" style={{height:' 100%', width: '100% '}}>
                <div className='p-5' style={{direction: 'rtl', 'font-size': '50px', 'margin-right': '100px' }}>
                    <h1
                    style={{'font-weight': '800','font-size': "70px"}}>
                        كأس
                    </h1>

                    <h1 style={{'font-weight': '800','font-size': '90px'}}>
                        العالم
                    </h1>
                </div>
            </div>
        </div>
    </> );
}

export default header;