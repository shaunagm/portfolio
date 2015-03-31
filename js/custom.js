/// <reference path="path-to-vsdoc-file" />

function highlight(ID) {

	// This function creates an array of information.  When an item from the grid is selected, the information is displayed in
	// the "Highlight" div.

	var highlightInfo = new Array(
/* 0: Personal Blog */		"I've kept a regularly updated <a href='http://www.shaunagm.net/blog' target='_blank'>personal blog</a> since January 2010.  You can find recommended posts <a href='http://www.shaunagm.net/blog/recommended-posts/' target='_blank'>here</a>.",
/* 1: OpenHatch Blog */		"[NOT IN USE] - include as part of 'OpenHatch' item",
/* 2: OSC */			"The Open Science Collaboration is a group of open science activists affiliated with the <a href='http://centerforopenscience.org/' target='_blank'>Center for Open Science</a>.  Currently I maintain <a href='http://osc.centerforopenscience.org/' target='_blank'>the OSC blog</a>, for which I also <a href='http://osc.centerforopenscience.org/author/shauna-gordon-mckeon.html' target='_blank'>write</a>.  <br /><br />Over the next year, I hope to undertake several small research projects with the help of members of the OSC.",
/* 3: Fiction */		"I've been writing most of my life, but I've only started trying to publish recently, so I have exactly one published piece:<br /><br />&nbsp;&nbsp;<a href='http://issue.liquid-imagination.com/article/hibernation-by-shauna-gordon-mckeon/' target='_blank'>Hibernation</a>, published 2/2013 in Liquid Imagination<br /><br />I also have a few pieces I have no plan on publishing, which I've released under a CC-BY-SA license:<br /><br />&nbsp;&nbsp;<a href='https://github.com/shaunagm/personal/blob/master/miscellaneous_files/writing/Silence.pdf' target='_blank'>Silence</a> - a retelling of the Little Mermaid<br />&nbsp;&nbsp;<a href='https://github.com/shaunagm/personal/tree/master/miscellaneous_files/writing/CryOfTheCrow' target='_blank'>The Cry of the Crow</a> – historical fiction set in Lagash, Sumer, 2380 BC<br /><br />I co-wrote <a href='http://www.shaunagm.net/images/display/zb.html'>a children's book</a> for my favorite three year old.</a><br /><br />You can also browse through <a href='http://www.shaunagm.net/blog/writing/' target='_blank'>blog posts tagged writing</a>.",
/* 4: Web Des & Dv */		"I have done a small amount of freelance and personal web development, in addition to creating and/or maintaining websites for OpenHatch, the Moral Cognition Lab, and other places of work.  My freelance work includes:<br /><br />&nbsp;&nbsp;<a href='https://github.com/shaunagm/personal/blob/master/miscellaneous_files/code/PurpleFields/' target='_blank'>Purple Fields</a> Wordpress theme<br />&nbsp;&nbsp;Shulamis publicity site (<a href='http://www.shaunagm.net/images/display/shulamis.html' target='_blank'>screenshots</a>)<br />&nbsp;&nbsp;<a href='https://github.com/shaunagm/personal/blob/master/miscellaneous_files/code/commentsvote/' target='_blank'>adapted Comments Vote plugin</a> for The Hathor Legacy<br />&nbsp;&nbsp;website for <a href='http://childrenscharter.org/' target='_blank'>Children's Charter</a> built during a hackathon (not their current site)<br />&nbsp;&nbsp;<a href='http://www.shaunagm.net' target='_blank'>the splash page for my website</a><br />&nbsp;&nbsp;this portfolio page, built using the <a href='http://mixitup.io/' target='_blank'>MixItUp</a> plugin<br />",
/* 5: MediaLab */		"During the winter and spring of 2012 I worked part time at the MIT Media Lab on a project called <a href='http://boxlab.wikispaces.com/' target='_blank'>BoxLab</a>. I processed and analyzed large quantities of audio, video and sensor data using primarily Python and C#.  Unfortunately, funding for the project ran out before I could finish, and the materials available online are currently incomplete.",
/* 6: Laser Lab */		"In the winter of 2011, I spent four months working part time at an <a href='http://www.seas.harvard.edu/matsci/people/aziz/aziz.html'>'Energy Technology' lab</a> - that is, a laser lab!  I built a graphical user interface in Matlab so that lab members could adjust settings, operate the laser and collect data from multiple sensors without having to learn to program.<br /><br />The image in the thumbnail is a space invader burned onto a sheet of metal using the GUI that I created.",
/* 7: OpenHatch */		"<a href='http://openhatch.org/' target='_blank'>OpenHatch</a> is a small non-profit dedicated to helping newcomers find their way into open source communities.  As OpenHatch's part-time Program Director, my primary project is <a href='http://campus.openhatch.org/' target='_blank'>Open Source Comes to Campus</a>, a series of workshops on college campuses introducing students to open source tools like issue trackers and version control and helping them make their first contributions to projects.  We've run twenty-one events since I joined in January 2013.  <br /><br />In addition to these campus events, I write for <a href='http://openhatch.org/blog/author/shauna/' target='_blank'>the OpenHatch blog</a>, help specific open source projects become more accessible, and work on improving our curriculum and outreach in various ways.  Specific projects that have been well-received include <a href='https://github.com/shaunagm/WelcomeBot' target='_blank'>WelcomeBot</a> and <a href='http://opensource-events.com/' target='_blank'>the In-Person Event Handbook</a>.  I also speak regularly at conferences on behalf of OpenHatch.",
/* 8: Parts & Crafts */		"<a href='http://partsandcrafts.org/' target='_blank'>Parts and Crafts</a> is a homeschooling center and summer camp run with an 'unschooling' philosophy.  It's frequently referred to as a hackerspace for kids.<br /><br />I have been teaching at Parts and Crafts on and off since the summer of 2010 and have led a variety of activities, including: <a href='http://www.shaunagm.net/blog/2010/09/learning-in-the-time-of-cholera/' target='_blank'>roleplaying a cholera outbreak</a>, <a href='http://www.shaunagm.net/blog/2011/01/community-supported-education/' target='_blank'>making telegraphs</a>, drawing a giant board game on the floor, playing baseball and computing baseball statistics, <a href='http://www.shaunagm.net/blog/2012/07/one-time-at-hackerspace-freeschool-camp/' target='_blank'>high speed photography</a>, <a href='http://www.shaunagm.net/blog/2011/08/hunting-grounds/' target='_blank'>making and running a kids' puzzle hunt</a>, and more.",
/* 9: SIG */			"I taught at the <a href='http://www.giftedstudy.org/' target='_blank'>Summer Institute for the Gifted</a> in 2007, 2008 and 2010.  I designed and ran courses in psychology, debate, mock trial, astrobiology, and etymology.  A small amount of the course material I designed is <a href='https://github.com/shaunagm/personal/blob/master/miscellaneous_files/teaching/Contents' target='_blank'> available for others to use</a>.",
/* 10: Civic Tech - Open Gov */		"In the summer of 2011 I began open government meetups approximately once a month in the Boston area.  (<a href='http://www.meetup.com/Open-Government-Boston/' target='_blank'>Meetup group</a>, <a href='http://www.meetup.com/SunlightFoundation/Boston-MA/past/' target='_blank'>previously</a>.)  Over the last year, <a href='http://www.meetup.com/Code-for-Boston/' target='_blank'>Code for Boston</a> has taken over much of the local organizing.  <br /><br />I continue to occasionally organize events, including the <a href='http://hackforchange.org/boston-civic-expo' target='_blank'>Boston Civic Expo (May 2013)</a>, <a href='http://www.meetup.com/Open-Government-Boston/events/104466882/' target='_blank'>Open Data Day (Feb 2013)</a>, <a href='http://followthemoney2012.wikia.com/wiki/Follow_the_Money_2012_Wiki' target='_blank'>Follow the Money (Sep 2012)</a> and a recent <a href='http://www.eventbrite.com/e/civic-tech-mixer-tickets-11064228405' target='_blank'>Civic Tech Mixer</a> (March 2014).  I also helped Mako Hill organize <a href='http://networkcollectiv.es/2014/03/09/community-data-science-workshops/' target='_blank'>some community data science workshops</a>.<br /><br />  I have some <a href='http://www.shaunagm.net/blog/2013/10/hacking-the-hackathon/' target='_blank'>reservations</a> about civic technology and community organizing, which I want to address before doing more work in this area.",
/* 11: Moral Cog Lab */		"<a href='http://wjh.harvard.edu/~mcl/' target='_blank'>The Moral Cognition Lab</a> is a psychology research lab focused on studying moral judgement and decision making.  I worked as lab manager there from September 2008 to March 2010.  While there, I oversaw the design, implemenation, analysis and presentation of multiple experiments as well as the functioning of the Moral Cognition Lab as a whole.<br /><br />Responsibilities included: designing and running studies; programming stimuli using Matlab, E*Prime, and HTML/CSS/Javascript; data processing and analysis using Matlab, SPM, JMP, and Excel; organizing lab meetings; running the undergraduate volunteer program; liaising with multiple collaborating labs; recruiting and screening participants; managing the lab payment system; and maintaining the lab website.  I also co-authored one <a href='http://www.wjh.harvard.edu/~jgreene/GreeneWJH/Cushman-Judgment-B4-Principle-SCAN11.pdf' target='_blank'>paper</a>.",
/* 12: UC Davis */		"From September 2007 to June 2008 I worked at the <a href='http://ucdirc.ucdavis.edu/' target='_blank'>UC Davis Imaging Research Center</a>.  I assisted with research into emotion processing in people diagnosed with schizophrenia and substance abuse disorders. Responsibilities included recruiting and screening participants, performing structured clinical interviews with healthy control participants, collecting and analysing neuroimaging, physiological, and behavioral data (using Matlab, SPM, E*Prime, SPSS and Excel), and managing financial and review board-related interactions and materials.",
/* 13: Yerkes */		"In the summer of 2006, as part of <a href='http://www.cse.emory.edu/sciencenet/undergrad/SURE/SURE.html' target='_blank'>Emory's SURE program</a>, I spent ten weeks interning at <a href='http://www.emory.edu/LIVING_LINKS/' target='_blank'>Living Links Laboratory</a>, at the center for non-invasively studying Capuchin monkeys.  In addition to learning how to care for and observe the monkeys and assisting with graduate student work, I also designed and implemented colorblindness tests which showed that several of the capuchins had visual impairments which potentially confounded laboratory research.",
/* 14: Hampshire */		"I attended <a href='' target='_blank'>Hampshire College</a> from September 2003 until May 2007, when I graduated with a BA in Behavioral Neuroendocrinology.  I did research in the Hampshire College Endocrinology Lab, the Event-Related Potential Lab, and the Amherst College Social Psychology Lab.  Hampshire does not provide grades or a GPA, however my narrative evaluations are available upon request.<br /><br />In my final semester at Hampshire, I TA'd an introductory neuroscience class.  In addition to leading a class session and several labs, I volunteered to mentor several students who wanted to do independent final projects and was responsible for evaluating them.  My evaluation for this work contains the comment I'm most proud of: 'I can honestly say that Shauna is one of the best TAs I have ever had.'<br /><br />To read about my Division III (Senior Thesis) see the separate portfolio item.",
/* 15: Div III */		"For my Div III (thesis) I explored the relationship between social and moral behavior, and physiological measures such as peripheral body temperature and the hormones cortisol, epinephrine, and testosterone.  I conceived of, designed and ran an experiment looking at how the stress response impacts altruistic behavior.  I also collaborated with <a href='http://www.noahisserman.com/' target='_blank'>Noah Isserman</a> on a second experiment, where we looked at interactions between testosterone levels, punishing behavior, and electroencephalographic response.  In addition to the two chapters which summarized this research, a third chapter contained a literature review of research into altruistic behavior and the stress response.<br /><br />This work was done under the guidance of Hampshire professors Cindy Gill, Jane Couperous and Neil Stillings, and <a href='http://helios.hampshire.edu/~jwcCS/Gordon-McKeon_2008.pdf' target='_blank'>was presented</a> at the 2008 meeting of the Cognitive Neuroscience Society.",
/* 16: WC Weekly */		"<a href='http://en.wikipedia.org/wiki/Victoria_Woodhull' target='_blank'>Victoria Woodhull</a> and her sister Tennessee Claflin were pioneering feminists in the latter half of the 19th century.  Using money earned as the United States' first female stockbrokers, they began publishing 'Woodhull and Claflin's Weekly', a weekly newspaper advocating women's suffrage, redistribution of wealth, and free love, among other radical ideas.  During the Weekly's run, Woodhull ran for the US Presidency, but was jailed on charges of obscenity during the election.<br /><br />There is no complete text of Woodhull and Claflin's Weekly online.  This project is an effort to create scans of the microforms of all issues of the newspaper.  It is currently stalled due to the low quality of the scans I've collected.  If you have access to high quality originals and/or scanning equipment please let me know!<br /><br />You can visit the project's <a href='https://github.com/shaunagm/wcweekly' target='_blank'>Github repository</a>.",
/* 17: Poli Internships */	"In high school and early college I was highly politically active.  In addition to general volunteer work, I did three internships:<br /><br />Dean for America, Jan 2004 - As a campaign intern, I worked sixteen hour days, seven days a week for a little over a month in a (fruitless) attempt to help Howard Dean win the New Hampshire democratic primary.<br /><br />Office of Connie Morella, Fall of 2002 - I was a constituent service intern in the home office of Representative Connie Morella (MD-8).<br /><br />Office of Tom Carper, Spring of 2002 - I was a press intern in the Capitol Hill office of Senator Tom Carper (DE).",
/* 18: Event organizing */	"[NOT IN USE] - include under civic tech/open gov",
/* 19: TA CogNeuro */		"[NOT IN USE] - include under Hampshire College",
/* 20: Non-degree CW */		"[NOT IN USE] - perhaps list non-degree courses from Harvard Extension, UC Davis, maybe also Coursera?",
/* 21: GalaxyRise */		"[NOT IN USE] - it's linked to on the blog, that's enough",
/* 22: MetaScience */		"[NOT IN USE] - it's linked to on the blog, that's enough",
/* 23: Samaritans */		"<a href='http://www.samaritans.org/' target='_blank'>Samaritans</a> is a suicide prevention/crisis hotline with local centers in the United Kingdom and United States.  I volunteered with them weekly (4-8 hrs/week, 24 hrs/month) and hope to do so again when my schedule permits.<br /><br />The data varies, and suicide is often under-reported, but it is generally believed that suicide is the second leading cause of death in adolescents and young people, and <a href='http://www.nytimes.com/2013/05/03/health/suicide-rate-rises-sharply-in-us.html' target='_blank'>rates have been rising recently</a>.  <a href='http://www.nytimes.com/2008/07/06/magazine/06suicide-t.html?pagewanted=1&_r=0&gwh=FE34ED83C252823DFDC296C84B00E9BF' target='_blank'>Most suicides are impulsive</a> and can be prevented.  Please consider donating time or money to Samaritans and other suicide prevention efforts.",
/* 24: Speaking */ "Public talks I have given include:<br /><br />Open Source for Newcomers and the People Who Want to Welcome Them, <a href='https://us.pycon.org/2015/schedule/presentation/346/'>PyCon</a>, April 2015<br />Growing Your Free Software Project, <a href='https://libreplanet.org/2015/program/speakers.html#gordon-mckeon'>LibrePlanet</a>, March 2015<br />Opportunities In Open Source, <a href='http://tapiaconference.org/schedule/thursday-february-19-2015/1030am-1200pm/opportunities-in-open-source/'>Tapia Conference</a>, February 2015<br />How to Contribute to Open Source, <a href='http://gracehopper.org/2014-schedule/?subject=show_details&_year=2014&sid=2036#2036'>Grace Hopper Celebration</a>, October 2014<br />Talking the Talk, <a href=''>AlterConf</a>, September 2014<br />Deconstructing Open Source Contributions, <a href='http://opensourcebridge.org/sessions/1313' target='_blank'>Open Source Bridge</a>, June 2014<br />Free Software and Open Science, <a href='https://libreplanet.org/2014/' target='_blank'>LibrePlanet</a>, March 2014<br />Teaching Open Source, <a href='https://www.socallinuxexpo.org/scale12x/' target='_blank'>SCaLE</a>, February 2014<br />Dendrites, <a href='http://thesprouts.org/' target='_blank'>sprout & co</a>, August 2013<br />Contributing to Open Source, <a href='http://www.acm.uiuc.edu/conference/2012/index.php' target='_blank'>Reflections | Projections</a>, November 2012 <br />A Brief History of Psychology, <a href='http://thesprouts.org/' target='_blank'>sprout & co</a>, May 2011<br /><br />I have also facilitated sessions, given lightning talks, sat on panels and led workshops at other conferences and events including AdaCamp (2013 and 2014), BarCamp Boston (2013), and Transparency Camp (2011, 2012, 2013).<br /><br />You can also read through posts tagged <a href='http://www.shaunagm.net/blog/category/things-i-do/speaking/' target='_blank'>'speaking'</a> on my blog.",
/* 25: Medical Research */ "I am a contractor for <a href='https://www.metamed.com/' target='_blank'>MetaMed Research</a>, a personalized medical research company.  I read, critique, and summarize the basic literature on medical conditions to aid professionals in diagnosis and treatment.<br /><br />If you are interested in working with me directly, please contact me.  I offer pay-what-you-can rates to those willing to let their results (redacted for privacy) be made publically available.",
/* 26: Rapid Science */ "I am Chief Technologist for <a href='http://www.rapidscience.org'>Rapid Science</a>, a nonprofit aiming to speed translational science, its accuracy, its dissemination to the clinic, and feedback regarding its efficacy.",
/* 27: Open Source Reference */ "As I read the Berkman Center fellowship application, trying to think of who my references would be, I found myself wishing that I could ask all of the communities that I participate in to collectively provide a letter. This was the result.<br /><br />You can <a href='http://www.shaunagm.net/site/static/docs/shauna-gordon-mckeon-recommendation.pdf'>view the letter directly</a>, or <a href='http://www.shaunagm.net/open-source-recommendation/w/Main_Page'>see how the sausage was made</a>.",
/* 28: When Women Refuse */ "<a href='http://whenwomenrefuse.tumblr.com/'>When Women Refuse</a> is a tumblr documenting violence against women.  From the about page:<br/><br />After the horrific tragedy of the shootings at UCSB on May 23, the Internet responded with the hashtag #YesAllWomen, to start a conversation around the fact that while not all men commit acts of violence, all women are afraid, and rightfully so, of gender-based violence. Many people participating in these conversations seemed to point to the UCSB shootings as an isolated incident, the work of a mad man who had nothing to do with reality. But the reality for many is that women denying sexual advances to both men they know and don’t know is often fraught with violent results.<br /><br />Although I did not concieve of the project, I am now the sole maintainer of it."
	);



/*<a href='' target='_blank'> */

	var printHTML = "<div id='Highlight'>" + highlightInfo[ID] + "</div>";

	$('div#Highlight').replaceWith(printHTML);
	if ($('#Highlight').css('display')=='none'){
                    $('#Highlight').fadeIn(600);
        }

/*	document.getElementById("HighlightWrap").innerHTML=printHTML;*/
}
