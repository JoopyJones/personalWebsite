import a from '../images/lejoopPhotos/2015AugustNightMarket-87.jpg';
import b from '../images/lejoopPhotos/AngelaJamie-4.jpg';
import c from '../images/lejoopPhotos/BuildingReflection.jpg';
import d from '../images/lejoopPhotos/CHance2.jpg';
import e from '../images/lejoopPhotos/CoffeWalk.jpg';
import f from '../images/lejoopPhotos/Demstickers.jpg';
import g from '../images/lejoopPhotos/eye3.jpg';
import h from '../images/lejoopPhotos/Fierce.jpg';
import i from '../images/lejoopPhotos/LennyBed.jpg';
import j from '../images/lejoopPhotos/Madalina.jpg';
import k from '../images/lejoopPhotos/NKEBeachPart2.jpg';
import l from '../images/lejoopPhotos/Roots(9).jpg';
import m from '../images/lejoopPhotos/StandingAbove-1.jpg';
import n from '../images/lejoopPhotos/The Time We Spend Online.jpg';
import o from '../images/lejoopPhotos/thoughs2.jpg';


//I initially designed this component to grab all the file names/path info from file as an array
//  and then loop through the array and create the img by using src=require(path/name), but 
//  apparently require will only work with hard coded strings, even though the string values ===
//  the hard coded values... so we will have to import each image and hardcode each img element
export default function LeJoop(){

    return(
        <div className='lejoop-header'>
            <div className='lejoop-grid'>
                <a className='image-link' target='_blank' rel="noreferrer" href={a}>
                    <img id ='lejoop-image' alt='' src={a}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={b}>
                    <img id ='lejoop-image' alt='' src={b}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={c}>
                    <img id ='lejoop-image' alt='' src={c}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={d}>
                    <img id ='lejoop-image' alt='' src={d}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={e}>
                    <img id ='lejoop-image' alt='' src={e}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={f}>
                    <img id ='lejoop-image' alt='' src={f}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={g}>
                    <img id ='lejoop-image' alt='' src={g}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={h}>
                    <img id ='lejoop-image' alt='' src={h}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={i}>
                    <img id ='lejoop-image' alt='' src={i}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={j}>
                    <img id ='lejoop-image' alt='' src={j}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={k}>
                    <img id ='lejoop-image' alt='' src={k}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={l}>
                    <img id ='lejoop-image' alt='' src={l}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={m}>
                    <img id ='lejoop-image' alt='' src={m}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={n}>
                    <img id ='lejoop-image' alt='' src={n}></img>
                </a>
                <a className='image-link' target='_blank' rel="noreferrer" href={o}>
                    <img id ='lejoop-image' alt='' src={o}></img>
                </a>

            </div>
        </div>
    )
}