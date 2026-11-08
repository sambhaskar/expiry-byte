// Blog articles for /insights/<slug>/. Plain data, also read by scripts/seo.mjs.
// Images: create them with the prompts in insights-image-prompts.md, save them in public/images/insights/
// with the file name below, then set ready: true for that image.
export const articles = [
  {
    slug: 'what-makes-a-good-business-website',
    category: 'Web Development',
    title: 'What makes a good business website in 2026?',
    description: 'Clear positioning, simple navigation, mobile usability, speed and purposeful calls to action: the parts of a business website that decide whether a visitor stays and gets in touch.',
    intro: 'A strong website is more than a striking homepage. Clear positioning, accessible navigation, mobile usability, page speed and purposeful calls to action work together to create a more useful experience. Here is what each one means in practice, and how to check your own site.',
    // Cover image hidden for now (placeholder shows). Set ready: true to show it again.
    cover: { file: 'good-business-website-cover.webp', ready: false, w: 1376, h: 768, alt: 'A business website shown on a desktop monitor, a laptop and a phone, with typography and colour panels from its design system floating alongside.' },
    sections: [
      {
        h: 'Say what you do in the first screen',
        p: [
          'Most visitors decide within a few seconds whether a page is relevant to them. In that time they should be able to answer three questions: what does this business offer, is it for someone like me, and what should I do next?',
          'That means a headline that names your service in plain words, a short supporting sentence, and one clear action. A clever slogan can work, but only when the sentence beneath it explains what you actually do.',
        ],
        list: ['Name the service or product in plain language', 'Say who it is for, or where you work', 'Give one primary action, such as "Book a call" or "Get a quote"'],
      },
      {
        h: 'Organise pages the way customers think',
        p: [
          'Navigation should follow the questions your customers ask, not the structure of your company. A visitor looking for prices should not need to guess whether they are under "Solutions", "Packages" or "Resources".',
          'Keep the main menu short, use everyday words, and make sure every important page can be reached in one or two clicks. If people often email you the same question, that answer probably deserves its own page or a clear place on an existing one.',
        ],
      },
      {
        h: 'Design for the phone first',
        p: [
          'For many businesses, a large share of visitors arrive on a phone, often in a hurry. A layout that works beautifully on a desktop can become a long, crowded scroll on a small screen.',
          'Mobile-first design means deciding what matters most on the smallest screen, then adding detail as space allows. Buttons should be large enough to tap, text should be readable without zooming, and contact options such as calling or WhatsApp should be easy to reach.',
        ],
        image: { file: 'good-business-website-mobile.webp', ready: true, w: 1376, h: 768, alt: 'The same business website on a tablet and on a phone, with the content rearranged into a single column on the phone.' },
      },
      {
        h: 'Treat speed as part of the design',
        p: [
          'A slow page loses people before they have read a word. Speed is shaped by many small decisions: the size of images, how many scripts and fonts load, and whether large effects are used where they are not needed.',
          'Good practice includes compressing and correctly sizing images, loading only the code a page needs, and testing on a real phone, not only on a fast office connection. Animation can still be part of a fast site when it is planned with performance in mind.',
        ],
      },
      {
        h: 'Give every page a purpose and a next step',
        p: [
          'Each page should have one main job: explain a service, answer a question, or help someone get in touch. When a page tries to do everything, visitors are left unsure what to do next.',
          'End important pages with a clear, relevant action. A service page might invite a quote request; an article might point to a related service. The wording matters too: "Get a written quote" says more than "Submit".',
        ],
      },
      {
        h: 'Earn trust with real information',
        p: [
          'Trust is built from details that are easy to check: a real email address, clear contact options, an honest description of how you work, and visible privacy and terms pages. Explaining your process and what is included in your price also helps people feel confident before they contact you.',
          'Avoid shortcuts such as invented reviews, borrowed client logos or numbers you cannot support. They can damage trust quickly, and they are rarely needed when the rest of the site is clear and honest.',
        ],
      },
      {
        h: 'Make it usable for more people',
        p: [
          'Accessibility is part of good design. Readable text sizes, good colour contrast, descriptive link text, keyboard navigation and alt text for meaningful images help people with disabilities, and they usually make the site easier for everyone.',
          'Motion should also respect visitors who have asked their device to reduce it. That can be as simple as replacing large movements with a gentle fade.',
        ],
      },
      {
        h: 'Keep it up to date',
        p: [
          'A website is not finished on launch day. Services change, prices change and new questions appear. Outdated information is one of the quickest ways to lose a visitor\'s confidence.',
          'Plan who will update the site and how. If your team will make regular changes, a content dashboard can let them edit text, images and articles without needing a developer each time.',
        ],
      },
    ],
    takeaway: {
      title: 'A quick check for your own website',
      list: ['Can a new visitor tell what you do within a few seconds?', 'Can they find prices, services and contact details in one or two clicks?', 'Does every page work comfortably on a phone?', 'Does the site load quickly on a mobile connection?', 'Does each important page end with a clear next step?', 'Is all the information still accurate today?'],
    },
    service: { label: 'Website Development', href: '/services/website-development/' },
  },
  {
    slug: 'when-to-use-scroll-animation',
    category: 'Digital Experiences',
    title: 'When should you use scroll animation on a website?',
    description: 'Scroll animation can make a complex story easier to follow, but only when it supports the content. How to decide where motion helps, where it hurts, and how to plan it well.',
    intro: 'Scroll interactions can make complex stories easier to follow, but only when they support the content. Used well, motion guides attention and makes a brand feel considered. Used carelessly, it slows people down and hides the information they came for. This guide explains how to tell the difference.',
    cover: { file: 'scroll-animation-cover.png', ready: false, alt: 'Abstract layers of a web page moving apart in sequence, suggesting a scroll-driven story.' },
    sections: [
      {
        h: 'What scroll animation actually is',
        p: [
          'Scroll animation links movement on the page to how far the visitor has scrolled. Text can slide into place, images can grow or change, objects can rotate, and whole sections can stay pinned while their content changes.',
          'Because the visitor controls the pace, scroll-driven motion can feel like turning the pages of a story rather than watching a video. That is its strength, and also why it needs careful planning.',
        ],
      },
      {
        h: 'When it helps',
        p: ['Animation earns its place when movement explains something faster or more clearly than a still image and a paragraph could.'],
        list: [
          'Showing how a product works, step by step, as the visitor scrolls',
          'Revealing a new product or launch in a memorable sequence',
          'Telling a brand story where the feeling is part of the value',
          'Presenting spaces, such as property or interiors, with a sense of depth',
          'Guiding attention through a complex idea one part at a time',
        ],
      },
      {
        h: 'When to keep it simple',
        p: [
          'If visitors need one quick answer, such as opening hours, a phone number or a price, heavy animation gets in the way. The same applies to pages people read closely, such as long articles, documentation or legal information.',
          'In these places, subtle motion is usually enough: a gentle fade as content appears, or a small response when a button is pressed. Restraint here makes the bigger moments elsewhere feel more intentional.',
        ],
        image: { file: 'scroll-animation-storyboard.png', ready: false, alt: 'A storyboard of four web page scenes, each showing the next step of a product story.' },
      },
      {
        h: 'Principles for animation that works',
        p: ['Good scroll animation tends to follow the same few rules, whatever the style of the site.'],
        list: [
          'Purpose first: every movement should guide, explain or connect',
          'Pacing: give important moments room, and avoid constant motion',
          'Performance: animate efficiently and keep assets light',
          'Mobile adaptation: rework effects for touch screens instead of shrinking them',
          'Reduced motion: respect visitors who have asked their device for less movement',
          'Readable content: the words must work even if the animation is switched off',
        ],
      },
      {
        h: 'Plan the story before the effects',
        p: [
          'The strongest animated websites start as a sequence, not a list of effects. Write down the message, then break it into scenes: what should the visitor see first, what changes next, and where should they end up?',
          'From there, the visual system is designed, the key motion is prototyped, and only then is it built and tuned. Timing is adjusted by hand, because small changes in pace make the difference between motion that feels natural and motion that feels mechanical.',
        ],
      },
      {
        h: 'Do not forget phones',
        p: [
          'Large desktop effects rarely translate directly to a phone. A pinned scene that works on a wide screen may need to become a simpler sequence on mobile, with lighter assets and shorter movements.',
          'Testing on real devices is essential. Smooth motion on a powerful laptop says little about how the same page feels on an everyday phone.',
        ],
      },
      {
        h: 'Questions to ask before you commission an animated site',
        p: ['These questions help you and your developer agree on scope before design begins.'],
        list: [
          'What is the one thing the animation should help visitors understand or feel?',
          'Which sections need motion, and which should stay calm?',
          'How should the experience change on phones?',
          'Are 3D, video or custom illustrations needed, and who will create them?',
          'How will performance and accessibility be tested before launch?',
        ],
      },
    ],
    takeaway: {
      title: 'In short',
      list: ['Use scroll animation where movement explains or creates feeling', 'Keep quick-answer and reading pages calm', 'Plan the story first, then the effects', 'Adapt for phones and respect reduced-motion settings', 'Make sure the content works without the motion'],
    },
    service: { label: 'Animated & Scroll Websites', href: '/services/animated-websites/' },
  },
  {
    slug: 'website-or-web-app',
    category: 'Web Applications',
    title: 'Website or web app: which does your business need?',
    description: 'A website communicates; a web application lets people do things. How to tell which one your business needs, when you need both, and how to scope the right first version.',
    intro: 'A website communicates. A web application lets people perform tasks, access data and manage workflows. Understanding that difference helps businesses scope the right solution before investing in development. This article explains the difference, the signs that point to each, and how to start sensibly.',
    cover: { file: 'website-or-web-app-cover.png', ready: false, alt: 'A simple website page beside a web application dashboard, showing the difference between the two.' },
    sections: [
      {
        h: 'The simple difference',
        p: [
          'A website is mainly for reading and finding information: who you are, what you offer, how to contact you. Most visitors are anonymous, and the content is the same for everyone.',
          'A web application is for doing things. People usually log in, and what they see depends on who they are: their bookings, their orders, their students, their reports. Information is stored, changed and shared between people.',
        ],
      },
      {
        h: 'Signs you need a website',
        p: ['A website is usually the right choice when your main goal is to be found, explain your offer and receive enquiries.'],
        list: [
          'You need a professional online presence for a new or growing business',
          'Customers mainly need information before contacting you',
          'You want to publish services, prices, articles or a portfolio',
          'Enquiries can be handled by a form, phone call or WhatsApp',
        ],
      },
      {
        h: 'Signs you need a web application',
        p: ['A web application starts to make sense when people need to complete tasks or work with information that changes.'],
        list: [
          'Bookings or appointments are managed by phone calls and notebooks',
          'Customers keep asking for updates you could show them directly',
          'Your team copies the same data between spreadsheets every day',
          'Different people, such as customers, staff and admins, need different access',
          'You want to test a product idea with real users',
        ],
        image: { file: 'website-or-web-app-workflow.png', ready: false, alt: 'Scattered spreadsheets and messages being organised into one clean web application screen.' },
      },
      {
        h: 'When you need both',
        p: [
          'Many businesses end up with both: a public website that explains the offer and brings in enquiries, and a web application behind a login where customers or staff get things done. A clinic might have an informational website and a booking system; a course creator might have a marketing site and a student portal.',
          'Planning both together keeps the design and experience consistent, even if they are built at different times.',
        ],
      },
      {
        h: 'What affects cost and time',
        p: [
          'Websites are usually quicker and less expensive to build, because they mostly present content. At Experibyte, Basic website packages start at ₹12,999 for up to five standard pages.',
          'Web applications involve more planning and engineering: user accounts, permissions, databases, integrations and testing. Our Starter web application package starts at ₹1,29,999, and larger platforms are priced after the requirements are clear. In both cases, the final price depends on the agreed scope.',
        ],
      },
      {
        h: 'Start with the essentials',
        p: [
          'If you do need an application, a well-defined first version helps you validate the idea before investing in every possible feature. This is often called a minimum viable product, or MVP.',
          'Choose the one or two journeys that solve the most painful problem, build those well, and let real use show you what to add next. It is usually cheaper, faster and teaches you more than trying to build everything at once.',
        ],
      },
      {
        h: 'Questions to scope the right solution',
        p: ['Before you ask for a quote, try answering these. They make any conversation with a developer far more productive.'],
        list: [
          'Who will use it, and what do they need to accomplish?',
          'Does anyone need to log in? If so, what should each type of user see?',
          'What information needs to be stored, and who can change it?',
          'Which existing tools or systems must it connect to?',
          'What would the smallest useful first version include?',
        ],
      },
    ],
    takeaway: {
      title: 'The short answer',
      list: ['If people mainly need to learn about you and get in touch, start with a website', 'If people need to log in and get things done, you need a web application', 'If both are true, plan them together and build in stages', 'Whichever you choose, start with the essentials and grow from real use'],
    },
    service: { label: 'Web Applications', href: '/services/web-applications/' },
  },
  {
    slug: 'where-ai-helps-small-business',
    category: 'AI & Automation',
    title: 'Where can AI help a small business today?',
    description: 'Practical, low-risk ways small businesses can use AI today, from answering common questions to routing enquiries, and how to judge whether it is working.',
    intro: 'Practical AI use cases often begin with customer questions, repetitive data handling and simple internal processes. The useful starting point is a clear problem and a way to assess accuracy and value. This guide covers where AI tends to help, where to be careful, and how to begin.',
    cover: { file: 'ai-small-business-cover.png', ready: false, alt: 'A small business owner at a desk while a friendly chat window answers customer questions on screen.' },
    sections: [
      {
        h: 'Start with a problem, not a tool',
        p: [
          'It is easy to start with the technology and look for somewhere to use it. It works better the other way round. Look for one task that takes too much time, follows a pattern and is based on information you already have.',
          'Good candidates are jobs your team repeats every day, questions customers ask again and again, and information that has to be moved from one place to another.',
        ],
      },
      {
        h: 'Answering common customer questions',
        p: [
          'A website assistant can answer frequently asked questions at any hour: opening times, services, how to book, what is included. Set up around your own information, it can reduce routine messages and help customers outside working hours.',
          'The important part is the boundary. A good assistant knows when it does not know, and passes the conversation to a person instead of guessing.',
        ],
        image: { file: 'ai-small-business-assistant.png', ready: false, alt: 'A website chat assistant answering a customer, then handing the conversation to a team member.' },
      },
      {
        h: 'Replying to and routing enquiries',
        p: [
          'New enquiries often wait too long for a first reply. AI can send a helpful first response, pick out the key details, and route the message to the right person or category, so your team starts from an organised summary instead of a long email.',
        ],
      },
      {
        h: 'Drafting and summarising, with review',
        p: [
          'AI can produce first drafts of routine content, such as replies, product descriptions or meeting notes, and summarise long documents. Used this way, it saves time while a person stays responsible for the final version.',
          'The review step matters. AI-generated text can contain mistakes or sound generic, so it should be checked before it reaches a customer.',
        ],
      },
      {
        h: 'Finding information in your own documents',
        p: [
          'If your team regularly searches through policies, manuals or past projects, an AI-assisted search can help them find the relevant part faster. It works best when the source documents are accurate and well organised, and when answers point back to where they came from.',
        ],
      },
      {
        h: 'Moving data between tools',
        p: [
          'Not every time-saver needs AI. Many repetitive tasks, such as copying form submissions into a spreadsheet or sending a notification when something changes, can be handled by standard automation. These are often simpler, cheaper and more predictable, and they combine well with AI where judgement is needed.',
        ],
      },
      {
        h: 'Where to be careful',
        p: ['AI is useful, but it has limits that should shape how you use it.'],
        list: [
          'AI-generated answers can be inaccurate, so test them with real questions',
          'Keep a person in charge of sensitive topics such as medical, legal or financial advice',
          'Decide what information an AI tool may access, and protect customer data',
          'Tell people when they are talking to an automated assistant',
          'Check running costs, as many AI services charge based on use',
        ],
      },
      {
        h: 'How to know if it is working',
        p: [
          'Before you start, decide what success looks like: fewer routine emails, faster first replies, or hours saved each week. Then check the quality of the output regularly, especially in the first weeks.',
          'A good first project is small, measurable and easy to switch off if it does not help. Once one workflow is proving its value, you can decide whether to extend it.',
        ],
      },
    ],
    takeaway: {
      title: 'A simple way to begin',
      list: ['Pick one repetitive task that takes real time each week', 'Write down what a good result looks like', 'Start small, with a person reviewing the output', 'Measure the time saved and the accuracy', 'Expand only when the first workflow is clearly helping'],
    },
    service: { label: 'AI Integration & Automation', href: '/services/ai-integration/' },
  },
];

export const articleBySlug = (slug) => articles.find((a) => a.slug === slug);

// Reading time from the article's words, at about 200 words a minute.
export function readingMinutes(article) {
  const text = [article.intro, ...article.sections.flatMap((s) => [s.h, ...s.p, ...(s.list || [])]), ...article.takeaway.list].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
