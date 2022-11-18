import Matche from "./matche";

function matches() {
    return ( <>
         <div id="matches " className="mt-5">
            <div className="row" style={{'margin':'0px'}}>
                <h1 style={{'direction': 'rtl'}}>
                    <b>المباريات</b>
                </h1>
                <hr/>
                <Matche/>
                
            </div>
        </div>
    </> );
}

export default matches;