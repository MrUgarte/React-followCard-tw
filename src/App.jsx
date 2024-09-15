import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const users = [
        {
            userName: 'ESPN',
            name:'ESPN',
            isFollowing: false,
            link:'https://x.com/espn'
        },
        {
            userName: 'cnnbrk',
            name:'CNN Breaking News',
            isFollowing: true,
            link:'https://x.com/cnn'
        },
        {
            userName: 'cristiano',
            name:'Cristiano Ronaldo',
            isFollowing: true,
            link:'https://x.com/cristiano'
        }
    ]
    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing, link}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        link={link}
                    >
                        
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}


