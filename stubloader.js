const examplePosts = [
    { md_text: "This is a standalone image post.", attachments: [{ thumb: "thumb/thumb01.jpg", full: "thumb/thumb01.jpg" }], polls: [], positions: [], schedules: [], tags: ["art", "image", "standalone"], user: "User1234", timestamp: "2025-01-01T12:00:00Z" },
    { md_text: "Are you ready??? This is going to be huge...", headline: "Let's meet in NY this week!", attachments: [{ thumb: "thumb/thumb02.jpg", full: "thumb/thumb02.jpg" }], schedules: [{ start: "2025-04-01", end: "2025-04-02" }], attendees: ["User1", "User2"], polls: [], positions: [], tags: ["event", "meetup", "ny"], user: "User5678", timestamp: "2025-02-01T15:00:00Z" },
    { md_text: "Are you ready??? This is going to be huge...", attachments: [{ thumb: "thumb/thumb02.jpg", full: "thumb/thumb02.jpg" }], schedules: [{ start: "2025-04-01", end: "2025-04-02" }], attendees: ["User1", "User2"], polls: [], positions: [], tags: ["event", "repeat", "hype"], user: "User9012", timestamp: "2025-02-02T10:00:00Z" },
    { md_text: "Are you ready??? This is going to be huge...", schedules: [{ start: "2025-04-01", end: "2025-04-02" }], attachments: [], attendees: ["User1", "User2"], polls: [], positions: [], tags: ["event", "noimage", "planning"], user: "User3456", timestamp: "2025-02-03T09:00:00Z" },
    { md_text: "For a long time we have had this one color...", headline: "What are your feelings about design?", polls: [{ question: "Should yellow stay the main color for Web9000?", options: ["Yes", "No", "Red or Green"], votes: [10, 5, 3] }, { question: "Should font be Arial Black?", options: ["Y", "N", "Helvetica"], votes: [8, 7, 2] }], attachments: [], positions: [], schedules: [], tags: ["design", "poll", "community"], user: "DesignerX", timestamp: "2025-02-04T14:00:00Z" },
    { md_text: "For a long time we have had this one color...", polls: [{ question: "Should yellow stay the main color for Web9000?", options: ["Yes", "No", "Red or Green"], votes: [12, 4, 1] }, { question: "Should font be Arial Black?", options: ["Y", "N", "Helvetica"], votes: [6, 9, 3] }], attachments: [], positions: [], schedules: [], tags: ["design", "poll", "repeat"], user: "DesignerY", timestamp: "2025-02-05T16:00:00Z" },
    { md_text: "Selling a rare book!", attachments: [{ thumb: "thumb/thumb03.jpg", full: "thumb/thumb03.jpg" }], positions: [{ title: "Seller", user: "User3" }], polls: [], schedules: [], tags: ["marketplace", "book", "sale"], user: "User3", timestamp: "2025-02-06T11:00:00Z" },
    { md_text: "A video post!", attachments: [{ thumb: "thumb/thumb04.mp4", full: "thumb/thumb04.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "content", "media"], user: "VideoFan", timestamp: "2025-02-07T13:00:00Z" },
    { md_text: "Audio sample post", headline: "Ripper Lover - the ending of all sanity", attachments: [{ thumb: "content/audio.mp3", full: "content/audio.mp3" }], polls: [], positions: [], schedules: [], tags: ["audio", "music", "sample"], user: "MusicLover", timestamp: "2025-02-08T17:00:00Z" },
    { md_text: "Audio sample post", attachments: [{ thumb: "content/audio.mp3", full: "content/audio.mp3" }], polls: [], positions: [], schedules: [], tags: ["audio", "simple", "test"], user: "AudioUser", timestamp: "2025-02-09T12:00:00Z" },
    { md_text: "Audio sample post", headline: "Ripper Lover - the ending of all sanity", attachments: [{ thumb: "content/audio.mp3", full: "content/audio.mp3" }, { thumb: "content/audio.mp3", full: "content/audio.mp3" }], polls: [], positions: [], schedules: [], tags: ["audio", "music", "multi"], user: "MusicLover2", timestamp: "2025-02-10T15:00:00Z" },
    { md_text: "Audio sample post", attachments: [{ thumb: "content/audio.mp3", full: "content/audio.mp3" }, { thumb: "content/audio.mp3", full: "content/audio.mp3" }], polls: [], positions: [], schedules: [], tags: ["audio", "multi", "test"], user: "AudioUser2", timestamp: "2025-02-11T09:00:00Z" },
    { md_text: "Gallery with multiple images", attachments: [{ thumb: "thumb/thumb05.jpg", full: "thumb/thumb05.jpg" }, { thumb: "thumb/thumb06.jpg", full: "thumb/thumb06.jpg" }, { thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }, { thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }, { thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }, { thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }], polls: [], positions: [], schedules: [], tags: ["gallery", "images", "art"], user: "GalleryCurator", timestamp: "2025-02-12T14:00:00Z" },
    { md_text: "Gallery with multiple images", attachments: [{ thumb: "thumb/thumb05.jpg", full: "thumb/thumb05.jpg" }, { thumb: "thumb/thumb06.jpg", full: "thumb/thumb06.jpg" }, { thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }], polls: [], positions: [], schedules: [], tags: ["gallery", "images", "simple"], user: "GalleryUser", timestamp: "2025-02-13T16:00:00Z" },
    { md_text: "Game listing with description.", attachments: [{ thumb: "thumb/thumb06.jpg", full: "thumb/thumb06.jpg" }, { thumb: "thumb/game.md", full: "thumb/game.md" }], polls: [], positions: [], schedules: [], tags: ["game", "listing", "project"], user: "GameDev", timestamp: "2025-02-14T10:00:00Z" },
    { md_text: "A long-form article.", attachments: [{ thumb: "thumb/article.pdf", full: "thumb/article.pdf" }], polls: [], positions: [], schedules: [], tags: ["article", "blog", "longform"], user: "WriterX", timestamp: "2025-02-15T13:00:00Z" },
    { md_text: "Job listing for a web developer.", positions: [{ title: "Web Developer", user: "HiringCompany" }], attachments: [], polls: [], schedules: [], tags: ["job", "hiring", "dev"], user: "HiringCompany", timestamp: "2025-02-16T11:00:00Z" },
    { md_text: "A meetup with a location.", schedules: [{ start: "2025-06-01", location: "New York" }], attachments: [], polls: [], positions: [], tags: ["meetup", "event", "ny"], user: "EventOrg", timestamp: "2025-02-17T15:00:00Z" },
    { md_text: "Poll + Event Hybrid", polls: [{ question: "Will you attend?", options: ["Yes", "No"], votes: [5, 3] }], schedules: [{ start: "2025-07-15" }], attachments: [], positions: [], tags: ["poll", "event", "hybrid"], user: "HybridUser", timestamp: "2025-02-18T12:00:00Z" },
    { md_text: "An interactive post with multiple elements.", attachments: [{ thumb: "thumb/thumb08.jpg", full: "thumb/thumb08.jpg" }, { thumb: "thumb/video.mp4", full: "thumb/video.mp4" }], polls: [{ question: "Which is better?", options: ["Choice A", "Choice B"], votes: [7, 4] }], positions: [], schedules: [], tags: ["interactive", "media", "poll"], user: "InteractiveUser", timestamp: "2025-02-19T14:00:00Z" },
    { md_text: "Music festival announcement.", headline: "Music Festival in NY!", schedules: [{ start: "2025-09-10" }], attachments: [{ thumb: "content/festival_theme.mp3", full: "content/festival_theme.mp3" }], polls: [], positions: [], tags: ["music", "festival", "event"], user: "FestivalOrg", timestamp: "2025-02-20T16:00:00Z" },
    { md_text: "A lost pet announcement with image.", attachments: [{ thumb: "thumb/thumb09.jpg", full: "thumb/thumb09.jpg" }], positions: [{ title: "Owner", user: "PetLover" }], polls: [], schedules: [], tags: ["pet", "lost", "announcement"], user: "PetLover", timestamp: "2025-02-21T10:00:00Z" },
    { md_text: "Mixed content with text, images, and a video.", attachments: [{ thumb: "thumb/thumb07.jpg", full: "thumb/thumb07.jpg" }, { thumb: "thumb/highlight.mp4", full: "thumb/highlight.mp4" }], polls: [], positions: [], schedules: [], tags: ["mixed", "media", "content"], user: "MixedUser", timestamp: "2025-02-22T13:00:00Z" },
    { md_text: "Cool video post!", attachments: [{ thumb: "thumb/thumb10.mp4", full: "content/content10.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "cool"], user: "User1", timestamp: "2025-02-27T10:00:00Z" },
    { md_text: "Nice image!", attachments: [{ thumb: "thumb/thumb11.jpg", full: "content/content11.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "nice"], user: "User2", timestamp: "2025-02-27T10:05:00Z" },
    { md_text: "Another image!", attachments: [{ thumb: "thumb/thumb12.jpg", full: "content/content12.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "art"], user: "User3", timestamp: "2025-02-27T10:10:00Z" },
    { md_text: "Funny video!", attachments: [{ thumb: "thumb/thumb13.mp4", full: "content/content13.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "funny"], user: "User4", timestamp: "2025-02-27T10:15:00Z" },
    { md_text: "Pretty picture!", attachments: [{ thumb: "thumb/thumb14.jpg", full: "content/content14.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "pretty"], user: "User5", timestamp: "2025-02-27T10:20:00Z" },
    { md_text: "Simple image!", attachments: [{ thumb: "thumb/thumb15.jpg", full: "content/content15.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "simple"], user: "User6", timestamp: "2025-02-27T10:25:00Z" },
    { md_text: "Abstract art!", attachments: [{ thumb: "thumb/thumb16.jpg", full: "content/content16.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "abstract"], user: "User7", timestamp: "2025-02-27T10:30:00Z" },
    { md_text: "Dynamic video!", attachments: [{ thumb: "thumb/thumb17.mp4", full: "content/content17.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "dynamic"], user: "User8", timestamp: "2025-02-27T10:35:00Z" },
    { md_text: "Static version!", attachments: [{ thumb: "thumb/thumb18.mp4", full: "content/content18.mp4" }], polls: [], positions: [], schedules: [], tags: ["image", "static"], user: "User9", timestamp: "2025-02-27T10:40:00Z" },
    { md_text: "Action video!", attachments: [{ thumb: "thumb/thumb19.mp4", full: "content/content19.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "action"], user: "User10", timestamp: "2025-02-27T10:45:00Z" },
    { md_text: "Smooth video!", attachments: [{ thumb: "thumb/thumb20.mp4", full: "content/content20.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "smooth"], user: "User11", timestamp: "2025-02-27T10:50:00Z" },
    { md_text: "Fast video!", attachments: [{ thumb: "thumb/thumb21.mp4", full: "content/content21.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "fast"], user: "User12", timestamp: "2025-02-27T10:55:00Z" },
    { md_text: "Colorful image!", attachments: [{ thumb: "thumb/thumb22.jpg", full: "content/content22.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "colorful"], user: "User13", timestamp: "2025-02-27T11:00:00Z" },
    { md_text: "Weird video!", attachments: [{ thumb: "thumb/thumb23.mp4", full: "content/content23.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "weird"], user: "User14", timestamp: "2025-02-27T11:05:00Z" },
    { md_text: "Minimal image!", attachments: [{ thumb: "thumb/thumb24.mp4", full: "content/content24.mp4" }], polls: [], positions: [], schedules: [], tags: ["image", "minimal"], user: "User15", timestamp: "2025-02-27T11:10:00Z" },
    { md_text: "Bright image!", attachments: [{ thumb: "thumb/thumb25.jpg", full: "content/content25.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "bright"], user: "User16", timestamp: "2025-02-27T11:15:00Z" },
    { md_text: "Dark image!", attachments: [{ thumb: "thumb/thumb26.jpg", full: "content/content26.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "dark"], user: "User17", timestamp: "2025-02-27T11:20:00Z" },
    { md_text: "Old photo!", attachments: [{ thumb: "thumb/thumb27.jpg", full: "content/content27.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "old"], user: "User18", timestamp: "2025-02-27T11:25:00Z" },
    { md_text: "New photo!", attachments: [{ thumb: "thumb/thumb28.jpg", full: "content/content28.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "new"], user: "User19", timestamp: "2025-02-27T11:30:00Z" },
    { md_text: "Short clip!", attachments: [{ thumb: "thumb/thumb29.mp4", full: "content/content29.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "short"], user: "User20", timestamp: "2025-02-27T11:35:00Z" },
    { md_text: "Long clip!", attachments: [{ thumb: "thumb/thumb30.mp4", full: "content/content30.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "long"], user: "User21", timestamp: "2025-02-27T11:40:00Z" },
    { md_text: "Classic image!", attachments: [{ thumb: "thumb/thumb31.jpg", full: "content/content31.jpg" }], polls: [], positions: [], schedules: [], tags: ["image", "classic"], user: "User22", timestamp: "2025-02-27T11:45:00Z" },
    { md_text: "Epic video!", attachments: [{ thumb: "thumb/thumb32.mp4", full: "content/content32.mp4" }], polls: [], positions: [], schedules: [], tags: ["video", "epic"], user: "User23", timestamp: "2025-02-27T11:50:00Z" }
];

function getStoredPosts() {
    try {
        return JSON.parse(localStorage.getItem('userPosts') || '[]');
    } catch (e) {
        return [];
    }
}

function saveStoredPosts(posts) {
    localStorage.setItem('userPosts', JSON.stringify(posts));
}

function normalizeTags(post) {
    if (!post.tags) return post;
    post.tags = post.tags.map(t => {
        if (typeof t === 'string') return { name: t, up: 1, down: 0 };
        if (t.up === undefined && t.votes !== undefined) t.up = t.votes;
        if (t.up === undefined) t.up = 1;
        if (t.down === undefined) t.down = 0;
        delete t.votes;
        return t;
    }).sort((a, b) => (b.up - b.down) - (a.up - a.down));
    return post;
}

function loadExamplePosts() {
    const updates = JSON.parse(localStorage.getItem('exampleUpdates') || '{}');
    const ex = examplePosts.map(p => updates[p.timestamp] ? Object.assign({}, p, updates[p.timestamp]) : p);
    const all = [...getStoredPosts(), ...ex];
    return Promise.resolve(all.map(p => normalizeTags({ ...p })));
}

function storePost(post) {
    const stored = getStoredPosts();
    stored.unshift(post);
    saveStoredPosts(stored);
}

function updateStoredPost(post) {
    const stored = getStoredPosts();
    const idx = stored.findIndex(p => p.timestamp === post.timestamp);
    if (idx !== -1) {
        stored[idx] = post;
        saveStoredPosts(stored);
    } else {
        const updates = JSON.parse(localStorage.getItem('exampleUpdates') || '{}');
        updates[post.timestamp] = post;
        localStorage.setItem('exampleUpdates', JSON.stringify(updates));
    }
}

function searchCachedPosts(query) {
    const all = [...getStoredPosts(), ...examplePosts];
    const tokens = query.toLowerCase().split(/\s+/);
    let text = [];
    let type = null;
    let from = null;
    let to = null;
    let tags = [];
    tokens.forEach(tok => {
        if (tok.startsWith('type:')) type = tok.slice(5);
        else if (tok.startsWith('from:')) from = tok.slice(5);
        else if (tok.startsWith('to:')) to = tok.slice(3);
        else if (tok.startsWith('tags:')) tags = tok.slice(5).split(',');
        else text.push(tok);
    });
    text = text.join(' ');

    return Promise.resolve(all.map(p => normalizeTags({ ...p })).filter(p => {
        let ok = true;
        if (type === 'event') ok = ok && p.schedules && p.schedules.length > 0;
        if (type === 'media') ok = ok && p.attachments && p.attachments.length > 0;
        if (type === 'poll') ok = ok && p.polls && p.polls.length > 0;
        if (type === 'text') ok = ok && (!p.attachments || p.attachments.length === 0);
        if (from) ok = ok && new Date(p.timestamp) >= new Date(from);
        if (to) ok = ok && new Date(p.timestamp) <= new Date(to);
        if (tags.length) ok = ok && tags.every(t => (p.tags || []).map(x => (typeof x === 'string' ? x : x.name).toLowerCase()).includes(t));
        if (text) {
            const q = text.toLowerCase();
            ok = ok && ((p.md_text && p.md_text.toLowerCase().includes(q)) ||
                        (p.headline && p.headline.toLowerCase().includes(q)));
        }
        return ok;
    }));
}

