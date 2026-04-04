interface Event {
  date: number;
  month: number;
  title: string;
  type: "tech" | "esports" | "holiday";
  startTime?: string;
  endTime?: string;
  description?: string;
  venue?: string;
}

interface TimelineEntry {
  title: string;
  events: Event[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "May 2026",
    events: [
      // Day 1 - May 11, 2026 (E-Sports)
      { date: 11, month: 5, title: "Rubik's Cube", startTime: "17:00", endTime: "18:00", type: "esports", description: "Speed cubing challenge.", venue: "Esports Arena" },
      { date: 11, month: 5, title: "Free Fire", startTime: "18:00", endTime: "19:00", type: "esports", description: "Free Fire tournament matches.", venue: "Esports Arena" },
      { date: 11, month: 5, title: "Asphalt 9", startTime: "19:00", endTime: "20:00", type: "esports", description: "Asphalt 9 racing challenge.", venue: "Esports Arena" },
      { date: 11, month: 5, title: "eFootball", startTime: "20:00", endTime: "21:00", type: "esports", description: "eFootball match series.", venue: "Esports Arena" },
      { date: 11, month: 5, title: "Valorant", startTime: "20:00", endTime: "21:00", type: "esports", description: "Valorant tournament round.", venue: "Esports Arena" },

      // Day 2 - May 12, 2026 (E-Sports)
      { date: 12, month: 5, title: "Chess", startTime: "17:00", endTime: "18:00", type: "esports", description: "Chess tournament rounds.", venue: "Esports Arena" },
      { date: 12, month: 5, title: "BGMI", startTime: "18:00", endTime: "19:00", type: "esports", description: "Mobile gaming battle arena.", venue: "Esports Arena" },
      { date: 12, month: 5, title: "FIFA", startTime: "19:00", endTime: "20:00", type: "esports", description: "FIFA tournament matches.", venue: "Esports Arena" },
      { date: 12, month: 5, title: "Mini Militia", startTime: "20:00", endTime: "21:00", type: "esports", description: "Mini Militia tournament match.", venue: "Esports Arena" },
      { date: 12, month: 5, title: "Clash of Clans", startTime: "20:00", endTime: "21:00", type: "esports", description: "Clash of Clans tournament match.", venue: "Esports Arena" },

      // Day 3 - May 13, 2026
      { date: 13, month: 5, title: "Inauguration Ceremony", startTime: "09:00", endTime: "11:00", type: "holiday", description: "Festival opening ceremony.", venue: "Main Auditorium" },
      { date: 13, month: 5, title: "AutoCAD (ME, CE)", startTime: "10:00", endTime: "13:00", type: "tech", description: "AutoCAD design challenge for Mechanical and Civil branches.", venue: "Mech/Civil Lab" },
      { date: 13, month: 5, title: "Codethon", startTime: "10:00", endTime: "12:00", type: "tech", description: "Competitive coding challenge.", venue: "CS Lab Block" },
      { date: 13, month: 5, title: "Project Exhibition", startTime: "14:00", endTime: "17:00", type: "tech", description: "Project showcase and evaluation.", venue: "Exhibition Hall" },
      { date: 13, month: 5, title: "Typing Test", startTime: "17:00", endTime: "19:00", type: "tech", description: "Typing speed and accuracy competition.", venue: "CS Lab Block" },
      { date: 13, month: 5, title: "Robo Rush", startTime: "19:00", endTime: "21:00", type: "tech", description: "Robo Rush competition rounds.", venue: "Robotics Lab" },

      // Day 4 - May 14, 2026
      { date: 14, month: 5, title: "Hackathon Begins", startTime: "09:00", type: "tech", description: "Hackathon kickoff and coding starts.", venue: "CS Lab Block" },
      { date: 14, month: 5, title: "Circuit Design", startTime: "11:00", endTime: "13:00", type: "tech", description: "Circuit design and implementation round.", venue: "Electronics Lab" },
      { date: 14, month: 5, title: "Line Follower Robot", startTime: "14:00", endTime: "16:00", type: "tech", description: "Autonomous robot line tracking competition.", venue: "Robotics Lab" },
      { date: 14, month: 5, title: "Treasure Hunt", startTime: "16:00", endTime: "18:00", type: "holiday", description: "Campus treasure hunt activity.", venue: "Campus Grounds" },
      { date: 14, month: 5, title: "Tech Quiz", startTime: "18:00", endTime: "20:00", type: "tech", description: "Technical quiz competition.", venue: "Seminar Hall A" },

      // Day 5 - May 15, 2026
      { date: 15, month: 5, title: "Hackathon Ends", startTime: "09:00", type: "tech", description: "Hackathon submission closes.", venue: "CS Lab Block" },
      { date: 15, month: 5, title: "Hackathon Presentation", startTime: "10:00", endTime: "13:00", type: "tech", description: "Final judging and team presentations.", venue: "Main Auditorium" },
    ],
  },
];