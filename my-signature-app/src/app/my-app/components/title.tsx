"use client";
import { useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title({ classes, title }) {
    const [name, setName] = useState();
    return (
        <>
            <h1 name=""></h1>
            <h3 className={classes ? classes : 'text-center'}>Signed on {title ? title : "X!"}</h3>
            <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet risus eget felis vestibulum ultrices eu eu orci. Pellentesque finibus, ligula non dictum ullamcorper, nisi lorem lobortis ligula, eu gravida massa elit sollicitudin sem. Suspendisse varius lectus sit amet massa lacinia maximus. Ut eros purus, consequat vitae metus eleifend, condimentum semper purus. Pellentesque imperdiet commodo purus, vitae posuere ante laoreet non. Mauris eget risus pulvinar, pretium sapien vitae, maximus risus. In vestibulum commodo turpis at sagittis. Aenean ut venenatis enim. Aenean erat tortor, suscipit quis turpis ut, interdum aliquet felis. In mauris augue, efficitur a nisl non, mattis aliquam libero. Nam varius enim ut fermentum rutrum. Nunc mollis commodo eleifend. Proin iaculis, nunc pulvinar gravida viverra, quam sapien imperdiet ipsum, condimentum ultrices dolor metus quis enim.</p>
            <footer className='place-content-center'>
                <input type="date" value={""} className='border-b' />
                <input className="self-center" type="text" name="whatever" id="" onChange={ } />
            </footer>
        </>
    )
}