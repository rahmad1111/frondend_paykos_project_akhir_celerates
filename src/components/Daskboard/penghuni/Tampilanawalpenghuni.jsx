import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getInformasi } from "../../../store/actions/userdata.actions";
import { format } from 'date-fns';

function Tampilanawalpenghuni() {
    const dispatch = useDispatch();
    const { informasi, loading, error } = useSelector((state) => state.datas);

    useEffect(() => {
        dispatch(getInformasi());
    }, [dispatch]);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={{display : 'flex', flexDirection : 'column', gap : '2rem'}}>
            <h5>Informasi Kos</h5>
            {informasi
                .slice()
                .reverse()
                .map((informasi) => (
                    <div key={informasi.id}>
                        <div className="card-dashboard">
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{format(new Date(informasi.createdAt), 'dd MMMM yyyy')}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>{informasi.informasi}</Card.Text>
                            </Card.Body>
                        </div>
                        <br />
                    </div>
                ))}
        </div>
    )
}

export default Tampilanawalpenghuni;