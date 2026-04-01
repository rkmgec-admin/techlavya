import TeamCard from '@/components/TeamCard'
import { TeamMember, teamMembers } from '@/data/team-data'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'

const Teams: React.FC = () => {
     return (
          <div className="min-h-screen text-foreground py-12 px-8 md:px-16 lg:px-20 pt-32">
               

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
                    {teamMembers.map((member: TeamMember) => (
                         <TeamCard {...member} key={uuidv4()} />
                    ))}
               </div>
          </div>
     )
}

export default Teams