import ListGroup from "./listGroup";

function groups() {
    return (<>
        <div  className="p-5 mt-1">
        <div className="row" style={{'direction': 'rtl'}}>
            <h1>
                <b>المجموعات</b>
            </h1>
            <hr/>
        </div>

<div className="row" id="standings">

    <div className="col-lg-6">
        <div className="card shadow border-none">
            <div className="card-header bg-primary" style={{"text-align": 'center'}}>
                <b>Group (A)</b>
            </div>
            <div className="row m-0 bg-secondary">
                <div className="col-lg-4" style={{"text-align": 'center'}}>
                    team
                </div>
                <div className="col-lg-2">
                    W
                </div>
                <div className="col-lg-2">
                    L
                </div>
                <div className="col-lg-2">
                    D
                </div>
                <div className="col-lg-2">
                    Pts
                </div>
            </div>
            <ListGroup/>
        </div>
    </div>    
</div>
</div>
    </>  );
}

export default groups;