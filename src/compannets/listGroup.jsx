function listGroup() {
    return ( <>
         <ul className="list-group list-group-flush">

<li className="list-group-item">
    <div className="row">

        <div className="col-lg-4 d-flex align-items-center justify-content-center" style={{'text-align': 'center'}}>
            
            <span className="flag">
                <img 
                    className="rounded-circle border border-2" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/560px-Flag_of_Saudi_Arabia.svg.png" 
                    alt=""
                    style={{"width": "40px", "height": "40px"}}
                />
            </span>
            <h5 style={{'margin':'auto 4px'}}>KSA</h5>
        </div>

        <div className="col-lg-2">
            2
        </div>

        <div className="col-lg-2">
            1
        </div>

        
        <div className="col-lg-2">
            0
        </div>

        <div className="col-lg-2">
            <b>7</b>
        </div>
    </div>  
</li>

</ul>
    </> );
}

export default listGroup;