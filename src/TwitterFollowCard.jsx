import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing, link}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); 

    const text = isFollowing ? 'Seguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <a href={link} target="_blank" className="link"><img  className='tw-followCard-avatar'alt="El avatar de MrShotCl" src={`https://unavatar.io/${userName}/`}/></a>
                <div className='tw-followCard-info'>
                    <a href={link} target="_blank" className="link"><strong>{children}</strong></a>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}