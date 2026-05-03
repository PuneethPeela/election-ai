const ELECTION_DATA = {
  steps: [
    { title: "Voter Registration", desc: "Ensure you are registered to vote by your state's deadline.", icon: "📝" },
    { title: "Research Candidates", desc: "Compare platforms and track records using non-partisan guides.", icon: "🔍" },
    { title: "Find Polling Place", desc: "Locate your assigned polling station or mail-box location.", icon: "📍" },
    { title: "Check Voter ID", desc: "Verify required documents like Driver's License or ID card.", icon: "🆔" },
    { title: "Plan Your Vote", desc: "Decide when and how you will go to the polls to ensure you make it.", icon: "📅" },
    { title: "Cast Ballot", icon: "🗳️", desc: "Follow instructions carefully on paper or digital ballots." },
    { title: "Track Results", icon: "📊", desc: "Monitor official tallies and certification processes." }
  ],
  timeline: [
    { date: "Oct 15", event: "Registration Deadline", category: "registration" },
    { date: "Oct 24", event: "Early Voting Starts", category: "voting" },
    { date: "Nov 01", event: "Mail-in Request Deadline", category: "registration" },
    { date: "Nov 05", event: "Election Day", category: "voting" },
    { date: "Dec 14", event: "Electoral College Vote", category: "results" }
  ],
  faqs: {
    "register": "You can register online, by mail, or at your local DMV in most states. Check Vote.gov.",
    "deadline": "Deadlines vary by state, usually 15-30 days before Election Day.",
    "id": "Most states require some form of ID. Photo ID is required in many, but not all.",
    "polling": "Find your polling place on your Secretary of State's website or via Google Search.",
    "absentee": "Any voter can request an absentee ballot in most states. Request it at least 2 weeks early."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Render Steps
  const stepsGrid = document.getElementById('steps-grid');
  ELECTION_DATA.steps.forEach(step => {
    const card = document.createElement('div');
    card.className = 'step-card';
    card.innerHTML = `<h3>${step.icon} ${step.title}</h3><p>${step.desc}</p>`;
    stepsGrid.appendChild(card);
  });

  // Render Timeline
  const tlList = document.getElementById('timeline-list');
  ELECTION_DATA.timeline.forEach(item => {
    const div = document.createElement('div');
    div.className = 'tl-item';
    div.innerHTML = `<strong>${item.date}</strong>: ${item.event}`;
    tlList.appendChild(div);
  });

  // Assistant Logic
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('user-input');
  const chatMsgs = document.getElementById('chat-messages');

  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = `msg msg-${type}`;
    div.textContent = text;
    chatMsgs.appendChild(div);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }

  addMsg("Hello! I'm ElectIQ. Ask me about registration, IDs, or deadlines.", 'bot');

  chatForm.onsubmit = (e) => {
    e.preventDefault();
    const q = chatInput.value.toLowerCase();
    if (!q) return;
    
    addMsg(chatInput.value, 'user');
    chatInput.value = '';

    setTimeout(() => {
      let reply = "I'm not sure about that. Try asking about 'registration', 'ID', or 'deadlines'.";
      for (let key in ELECTION_DATA.faqs) {
        if (q.includes(key)) { reply = ELECTION_DATA.faqs[key]; break; }
      }
      addMsg(reply, 'bot');
    }, 500);
  };

  // Checklist
  const clItems = ["Register to vote", "Verify Voter ID", "Find Polling Station", "Research Ballot", "Create Voting Plan"];
  const clList = document.getElementById('checklist-items');
  clItems.forEach(item => {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.innerHTML = `<label style="cursor:pointer"><input type="checkbox"> ${item}</label>`;
    clList.appendChild(li);
  });

  // Search Logic (Google Search Integration)
  const searchForm = document.getElementById('election-search-form');
  const searchInput = document.getElementById('search-input');
  
  if (searchForm) {
    searchForm.onsubmit = (e) => {
      e.preventDefault();
      const term = searchInput.value;
      if (term) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(term + " election official information")}`, '_blank');
      }
    };
  }
});
