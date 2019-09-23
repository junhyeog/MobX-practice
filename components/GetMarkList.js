import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import MarkListTable from './MarkListTable';
import GoogleMapReact from 'google-map-react'


const GetMarkList = () => {
    const [markList, setMarkList] = useState([]);

    const getMarkList = (e) => {
        e.preventDefault();
        axios.get('http://localhost:4000/api/marklist')
            .then(response => {
                setMarkList(response.data)
                console.log(response.data)
            })
            .catch(err => { console.log(err) })

    }

    const fetchInitialData = async () => {
        const res = await fetch('http://localhost:4000/api/marklist');
        const initialData = await res.json();
        console.log(initialData);
        setMarkList(initialData);
    }
    useEffect(() => {
        fetchInitialData()
    }, [])

    const Map = ({ markList }) => {
        const defaultProps = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
        
        
        const Marker = (mark) => {
            return (
                <div style={{fontSize: "24px", color: "Red"}}>
                    <div lat={Number(mark.lat)} lng={Number(mark.lng)}>{mark.name}</div>
                </div>
            );
        }

        return (
            <div style={{ height: '90vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCGdylwOS37HVgu289UA6q2J4omA81Rd-w' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >

                    {markList.map((mark) => {
                        return (<Marker
                            lat={mark.lat}
                            lng={mark.lng}
                            name={mark.name}
                            key={mark.id} />);
                    })}
                   
                    {/* <Marker
                        lat="59.955413"
                        lng="30.337844"
                        text="T1"
                    />

                    <Marker
                        lat="59.955413"
                        lng="30.437844"
                        text="T2"
                    /> */}
                    {}
                </GoogleMapReact>
            </div>
        )
    }
    return (
        <Fragment>
            <form>
                <button onClick={getMarkList}>
                    get marklist
            </button>
            </form>
            <MarkListTable markList={markList} />
            <Map markList={markList} />
        </Fragment>
    )
}

export default GetMarkList;
