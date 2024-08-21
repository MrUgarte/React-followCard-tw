import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const users = [
        {
            userName: 'ESPN',
            name:'ESPN',
            isFollowing: false
        },
        {
            userName: 'cnnbrk',
            name:'CNN Breaking News',
            isFollowing: true
        },
        {
            userName: 'cristiano',
            name:'Cristiano Ronaldo',
            isFollowing: true
        }
    ]
    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}


