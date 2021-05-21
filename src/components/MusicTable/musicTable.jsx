import React from 'react'
import './musicTable.css'
import DeleteButton from '../DeleteButton/deleteButton.jsx'

const MusicTable = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Album Release Date</th>
            </tr>
            </thead>
            <tbody>
                {props.songs.map(track => {
                    return (
                        <tr key={track.id}>
                            <td>{track.id}</td>
                            <td>{track.title}</td>
                            <td>{track.artist}</td>
                            <td>{track.album}</td>
                            <td>{track.release_date}</td>
                            <DeleteButton />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
    }
export default MusicTable;