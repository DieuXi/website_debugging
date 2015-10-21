// JavaScript Document
var bios = [
{
      Name: 'DAVID HOFFMAN', 
      Title: 'Creative Director', 
      Src: 'hoffman_b.jpg',
      Bio: "<p>David is a writer, musician, and artist, as well as producer of media and events. He has written, produced, and directed theatrical pieces in both New York and Washington, DC, and produced or co-produced events including the PROJECT Global Trade Show, PHOTOVILLE, the New York Photo Festival, the DUMBO Arts Festival, The FiFi Awards, fundraising Galas for Dress for Success and the Bedford Academy, and mobile marketing programs for Diageo, Pepsico, and Nature's Way.</p>" +
				"<p>As a composer of music and producer of audio content, he has collaborated with groups including the Capital Wind Quintet, Osso, The Gene Project, and the New York Shakespeare Exchange, and, in collaboration with Good Eye Video, created commercial music for New York University, Fast Company, Barnard College, the City University of New York, Municipal Forum of New York, The Prendismo Collection, Shatterbox.com, Fonkoze, and Episcopal Migration Ministries.</p>" +
				"<p>He is also a recognized visual artist, who's paintings have appeared in many galleries and private collections, nationwide. </p>"+ 
				"<p>He founded CitizenRacecar in 2012. </p>",
      Href: []
},
{
      Name: 'HORST DIETER BAUM', 
      Title: 'Cinematographer', 
      Src: 'baum_a.jpg',
      Bio: "<p>Dieter has filmed commercial pieces for clients such as Samuel Adams beer and Con Edison, and served as Director of Photography for more than a dozen narrative shorts that have been shown at Cannes and many other festivals, worldwide. He recently finished production of the feature film <b>The People Downstairs</b>, and is an active still photographer. </p>",
	Href: ["horstdieterbaum.com"]
},
{
      Name: 'MARI JAYE BLANCHARD', 
      Title: 'Animator, Illustrator', 
      Src: 'mjb_a.jpg',
      Bio: "<p>Mari Jaye Blanchard is an independent animator living and working in Brooklyn, NY. She is a New York Foundation for the Arts Gregory Millard Fellow and an Urban Artist Initiative Fellow in Film. Her animated shorts have screened in festivals throughout the US and internationally, including Annecy, France; Melbourne, Australia; and Brooklyn’s Animation Block Party. She teaches animation at the University of Pennsylvania, Pratt Institute and the School of Visual Arts. Her clients include MTV and Sesame Workshop, and she is a proud co-founder of the New York animation collective Family Camp. </p>",
	Href: []
},
{
      Name: 'ASHLEI DABNEY', 
      Title: 'Producer', 
      Src: 'dabney_a.jpg',
      Bio: "<p>Ashlei is a television and event producer with credits including series for the Oprah Winfrey Network, The Learning Channel, and BET, and events at the Apollo Theater and Carnegie Hall in New York, the Shrine Auditorium and Wiltern Theater in LA, and the Warner Theater in Washington, DC. Also an accomplished actor, she studied at the Duke Ellington School of the Arts, and holds a degree in theater arts from Howard University.</p>",
      Href: []
},
{
      Name: 'PAUL DOCHERTY', 
      Title: 'Video Editor, Animator', 
      Src: 'docherty_a.jpg',
      Bio: "<p>Paul has done work thatâ€™s appeared on PBS, A&E, TruTV, VH1, and The Discovery Channel, including the Peabody- and Emmy-award-winning <b>American Masters</b>: â€œLENNONYCâ€ and the Emmy-award-winning <b>The War</b> by Ken Burns. Other credits include the acclaimed documentary feature <b>Facing Forward</b>, and the first United States Marine Corps training video to specifically address in-the-field diagnosis and treatment of post-traumatic stress disorder.</p>",
      Href: ["pauldocherty.net"]
},
{
      Name: 'MICHAEL SHAW FISHER', 
      Title: 'Writer', 
      Src: 'fisher_a.jpg',
      Bio: "<p>Michael is a writer, performer, and producer, originally from Washington DC, and currently based in Los Angeles. </p>" +
    "<p>He's the founder of two successful Southern California theater groups - the Orgasmico Theater Company, of which he also serves as Artistic Director, and the Los Angeles Playwrights Lab. With Orgasmico, he wrote and produced Doomsday Cabaret: a Rock Musical of Apocalyptic Proportions, which won Best Musical at the Hollywood Fringe Festival in 2012, and earned him an Ovation Award for Lyrics and Music nomination in 2013; and the original rock musical parody, Exorcistic, which won the Hollywood Fringe’s Freak Award in 2013 and was extended as a Sacred Fools Spotlight production. </p>" +
    "<p>He has also written and produced several independent film projects, including Shakespeare’s Timon of Athens, which won the El Capitan Award from the Yosimite International Film Festival.</p>" +
    "<p>He holds an MFA in Screenwriting from the University of Southern California, where he received Thesis Distinction in 2008, and an MA in Theatre Arts from San Francisco State University.</p>",
      Href: []
},
{
      Name: 'GRANT GOLDBERG', 
      Title: 'Audio Engineer', 
      Src: 'goldberg_a.jpg',
      Bio: "<p> Grant studied music composition and guitar performance at the University of North Texas before moving to New York to pursue a Master’s degree in Music Technology at NYU. As a engineer, credits include the Magnet Theater podcast, which he helped create.</p>" +
    "<p>As well as an engineer and musician, he’s also an experienced filmmaker and photographer.</p>",
      Href: []
},
{
      Name: 'KERRY KASTIN', 
      Title: 'Director', 
      Src: 'kastin_b.jpg',
      Bio: "<p>Kerry is a director, actor, producer, and new media expert with deep roots in theater. She was an Artist-in-Residence with the Bershire Theater Festival before moving to New York where she trained in improv comedy at Gotham City Improv and Magnet Theater, and  worked with companies such as the New York Shakespeare Exchange, F.A.C.T, Tip My Cup Productions, Squeaky Bicycle, and Blowout Theater Company of which she is co-founder and Artistic Director. In a recent highlight she played opposite Tony Shaloub in a workshop production of Act One, a new play by James Lapine, which was performed at the Vinyard Theater and Lincoln Center.</p>" +
				"<p>An early adopter of podcasting as an artistic medium, Kerry has collaborated on The Truth and Thor’s Hour of Thunder, and created Blowout Theater’s Podcasting Workshop program, which teaches media production skills to high school students. </p>",
      Href: []
},
{
      Name: 'PETER RIVAS KLEINER', 
      Title: 'Writer', 
      Src: 'kleiner_a.jpg',
      Bio: "<p>Peter is a writer, editor, content strategist, and marketing communications manager, as well as an acclaimed playwright. Commercial highlights include promotional websites for the movies <b>Casino</b>, <b>Clockers</b>, <b>Waterworld</b>, <b>Die Hard</b>, <b>Goldeneye</b>, and <b>Apollo 13</b> the videogame <b>Burn:Cycle</b>, and Planet Hollywood restaurants, as well as work for Allstate, American Express, Citibank, State Street Financial, Morgan Stanley, and Scholastic. </p>" +
      		"<p>His plays have been performed in New York and regionally, and he served as dramaturge for the Lee Strasburg Institute in Los Angeles. He was also senior writer for <b>Eon-4,</b> the first episodic science fiction website.  </p>",
      Href: ["peterrivaskleiner.com"]
},
{
      Name: 'KEN KOBLAND', 
      Title: 'Cinematographer, Video Editor', 
      Src: 'kobland_a.jpg',
      Bio: "<p>Ken is an award-winning filmmaker whose work has shown at dozens of major international festivals and received grants and awards from the Rockefeller Foundation, the John Simon Guggenheim Foundation, the American Film Institute, and many others.</p>" +
      		"<p>Credits include the PBS documentaries <b>Leonard Bernsteinâ€™s New York</b>, <b>The Gypsy Kings</b>, and <b>Country Rhythm and Blues</b>, and several collaborations with the Director Marion Cajori, including <b>Louis Bourgeois: The Spider, the Mistress, and the Tangerine</b>, the award-winning <b>Joan Mitchell: Portrait of an Abstract Painter</b>, (Gold Plaque, the Chicago International Film Festival; Grand Prize, International Festival of Films on Art), and <b>Chuck Close</b>, for which he received Emmy nominations for Best Cinematography and Best Film Editing.</p>",
      Href: ["kenkoblandfilms.com"]
},
{
      Name: 'ANNA R PACK', 
      Title: 'Web/Interactive Developer', 
      Src: 'apack_b.jpg',
      Bio: "<p>Anna R. Pack is a front-end programmer and designer who's also done work for United Photo Industries and CLC Industries. She studied photography at the International Center for Photography, design at the Fashion Institute of Technology, and programming at DeVry University. She lives and works in New York. </p>",
      Href: ["annarpack.com"]
},
{
      Name: 'NAZ SAHIN', 
      Title: 'Graphic Designer', 
      Src: 'sahin_a.jpg',
      Bio: "<p>Naz is a multidisciplinary designer based in Brooklyn, with experience in all forms of online, print, and broadcast media. Portfolio highlights include the website for NPR’s This American Life, info graphics for Newsweek magazine, book design of the New York Times bestseller Superfreakonomics, and the opening credits for the 2009 season of Saturday Night Live, as well as work for UniQlo, HBO, Augustus Harris, and Good magazine.</p>"  +
    "<p>She also writes the column “Mixed Nuts” for Cherry Bombe magazine, and the blog Feasting Never Stops.</p>",
      Href: ["buomu.com"]
},
{
      Name: 'JUSTINE SELIGMAN', 
      Title: 'Graphic Designer', 
      Src: 'seligman_a.jpg',
      Bio: "<p>Justine is a print and web designer with a particular expertise in typography and the engaging presentation of information. Past projects include nationwide interactive promotional campaigns for the launch of the Nintendo DS and the release of the movie <b>Nancy Drew</b>, updated user experience design for Yelp, an iPad app for Guiness, and work for Mercedes-Benz, Amazon, Nike, NBC, Diageo, Johnnie Walker, Good Housekeeping, and the New York Academy of Sciences. </p>",
      Href: []
},
{
      Name: 'DAVE SHELLEY', 
      Title: 'Producer', 
      Src: 'shelley_a.jpg',
      Bio: "<p>Dave has produced and managed everything from stadium concerts for Bruce Springsteen, Eminem, and the Rolling Stones, to Off-Broadway and regional theater, to special events including the Tribeca Film Festival, the New York Photo Festival, and the World of Science Festival. Film credits include short format films and commercials in collaboration with Second City, <b>The Vagina Monologues</b>, the Detroit Red Wings and the Detroit Tigers, and the film event <b>Under the Bridge: Projections of the Revolution in NYC</b>.</p>" +
      		"<p>Dave is co-founder and Creative Producer of Unitied Photo Industries, with whom he co-created PHOTOVILLE, first held in Brooklyn Bridge Park in the summer of 2012. He is also an actor, who has toured internationally with the Wooster Group, and appeared in numerous works for theater, film, and television.</p>",
      Href: ["unitedphotoindustries.com", "photoville.com"]
},
{
      Name: 'SKIN AND BONES', 
      Title: 'Musician', 
      Src: 'skin_n_bones_a.jpg',
      Bio: "<p>Skin and Bones is a composer and producer of music and wunderkind of the East Coast underground hip-hop community. He is also known as Emmett Krauss, student in the business school of Hofstra University. </p>",
      Href: ["soundcloud.com/skinandbonesbeats"]
},
{
      Name: 'DANIEL WHITE', 
      Title: 'Producer', 
      Src: 'white_a.jpg',
      Bio: "<p>Daniel is an experienced producer of events and marketing campaigns, based in New York City. He’s worked on festivals including the CMJ Music Marathon, The Siren Festival, River to River, and South by Southwest, and large events like the Fragrance Foundation’s “FiFi” awards, and grand opening of One Bryant Park, Bank of America's New York headquarters, and the city's first LEED Platinum skyscraper. One of his projects holds the world record for the most user-generated videos shot at a dance party.</p><p>A lifelong advocate for artists and the arts, Daniel managed the production of the Dumbo Arts Festival in 2010 and 2011, which involved over 500 artists and attracted over 200,000 attendees.</p>" + 
    "<p>Since 2013 he has produced tours for Sperry TopSider, Gilt, and Infiniti; and sponsorship campaigns for Justin Bieber, Macklemore, the South Beach Wine and Food Festival, and Tiffany & Co.</p>",
      Href: [""]
}];