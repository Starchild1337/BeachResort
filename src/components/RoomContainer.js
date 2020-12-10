import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
import {withRoomConsumer} from '../context';

const RoomContainer = ({context}) => {
    const {rooms,sortedRooms,loading} = context;
     if(loading) {
                    return <Loading />
                }
      return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms}/>
        </div>
                )
}

export default withRoomConsumer(RoomContainer);
