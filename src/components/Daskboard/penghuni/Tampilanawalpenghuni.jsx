import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getInformasi } from "../../../store/actions/userdata.actions";

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
        <div>
            <br />
            <h5>Informasi Kos</h5>
            {informasi
                .slice()
                .reverse()
                .map((informasi) => (
                    <div key={informasi.id}>
                        <Card style={{ width: "auto" }}>
                            <Card.Body>
                                <Card.Text>{informasi.informasi}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{informasi.createdAt}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <br />
                    </div>
                ))}
        </div>
    )
}

export default Tampilanawalpenghuni;