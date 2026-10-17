import {useSelectore,useDispatch} from 'react-redux';
import {useState} from 'react';


const movie = () =>{
    const dispatch = useDispatch();
    const movies = useSelectore(state => state.movies);
    const [title, setTitle] = useState("");
}

const AddMovie = () =>{
    if (title.trim()==="") return;
}

