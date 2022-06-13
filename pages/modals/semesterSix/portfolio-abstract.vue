<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <NuxtLink class="modal-close" to="/semesters/semesterSix">×</NuxtLink>
          <h1>Reading Guide</h1>
        </div>
        <div class="modalbody-container">
          <div class="col-lg-8 mx-auto">
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>PSV <span>👉</span> Media Platforms</h1>
                  <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>K. Huggers, D. van Sleeuwen, S. Sodermans, M. Kroeze, R. van Wijk</i>
                  </div>
              <div class="pdf-btn-cont">
                <a target="_blank" href=""><button class="btnModalClose bntModalClose-bg-color">View reading guide in
                    PDF</button></a>
              </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Approach</h2>
                    <p>During the project we worked with Trello. In Trello we worked Scrum; meaning we would post
                      tasks/activities that needed to be undertaken for each sprint and when the tasks/activities were
                      completed we reviewed each other's work. Reviewing often happened during the stand-ups (Monday and
                      sometimes Wednesday morning) which were online via MS Teams. On Tuesday we met on location to
                      discuss and/or review work. On Thursday we each worked individually on our portfolio. Friday was
                      often working from home individually. Google Drive was used to store all our research work and a
                      GitHub organization was created to manage code.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-sub-wrapper">
                      <div class="project-h3-content">
                        <h3>Project method</h3>
                        <div class="project-body">
                          <p>After the scoping of the project, we assigned a specific user story to each project
                            member to work on. I decided to apply the Design Thinking method, because it's a very
                            flexible method where you can start with prototyping if needed and then go back to a
                            phase that normally would be explored earlier (e.g. empathizing). I predicted that I would
                            probably have to make POC's early on to explore the technical possibilities for my user
                            story so using Design Thinking would be a safer option than the less flexible Waterfall
                            method for example.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Sprint 0 - Project Kickoff & Orientation</h2>
                    <p>On the introduction day, groups were made and linked to assignments of clients. Our group was
                      linked to the assignment of PSV.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-sub-wrapper">
                      <div class="project-h3-content">
                        <h3>Context</h3>
                        <div class="project-body">
                          <p>PSV is a Dutch sports club and is mainly known as a football club. PSV wants to offer its
                            fans
                            and followers a good and relevant experience on every device and at any time. PSV currently
                            has
                            a website and two native apps to provide this.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Problem/opportunity</h3>
                        <div class="project-body">
                          <p>Technological developments are moving fast and there are now countless possibilities for
                            setting up digital platforms. Setting up and maintaining a custom-built app
                            requires a relatively large amount of work and investment, because you have to develop
                            everything separately for android and ios. At the same time, the possibilities of mobile
                            websites are increasing. This all lead PSV to wonder how PSV can best organise its digital
                            platforms with regard to what they want to offer fans and followers.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Goals</h3>
                        <div class="project-body">
                          <p>The main goal of the project is to make the PSV app more valuable to PSV fans in a
                            future-proof way. PSV originally wanted to let us research what technologies a new PSV app
                            should use. In addition, we (the project group) saw an opportunity to also research and
                            redesign some of its most
                            attractive/valuable features/concepts so that more value could be added to the PSV app in
                            the future.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Debriefing & Project Plan</h3>
                        <div class="project-body">
                          <p>In the <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan">debriefing</a>
                            meeting we mainly listened to what the client had to say. PSV told us
                            that developing and maintaining their website and apps costs a lot of money. Mainly their
                            iOS and Android apps which are developed by a third party. They would like a cheaper
                            solution to bring PSV fans the content & functions they need.</p>
                          <p>Based on the information from the debriefing, me and Dary, created the first version of the
                            <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan">project
                              plan</a>. When we were defining the project plan, we began to doubt whether this
                            assignment was fitting for ICT & Media Design students since the client specifically asked
                            for a cheaper technical solution and nothing that had something to do with users.</p>
                          <p>We arranged two more meetings with PSV to see if we could reformulate the assignment and
                            define the scope. In this
                            meeting PSV told us that they were busy concepting new features for the app, like being able
                            to scan tickets, order food during a game and more. They didn't want us to work on these
                            features, but we suggested that we would do technical research and also design the features
                            PSV were working on so that they could perhaps draw inspiration from our ideas/designs. PSV
                            agreed and so we adjusted the project plan.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Researching software architecture</h3>
                        <div class="project-body">
                          <p>While we were waiting for meetings with PSV to update the project plan, we were doing
                            research on the current situation. I did research on what entities the architecture of PSV's
                            media platforms consisted of. This would help give us an overview on what could be improved
                            while keeping into account the existing software architecture (e.g. API's) and stakeholders.
                            Information about PSV's architecture was collected by talking to PSV and doing additional
                            desktop research (e.g. researching what the API's were capable of). This information was
                            used to create a <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/architecture">software
                              architecture diagram</a> using the C4 model. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Sprint 1 - Empathize & Define</h2>
                    <p>After everything regarding the scoping of the project was clear, it was time to define a target
                      audience and understand their needs.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-sub-wrapper">
                      <div class="project-h3-content">
                        <h3>Target Audience</h3>
                        <div class="project-body">
                          <p>PSV's current apps target PSV fans of any age. The apps have lots of features/sections like
                            games, augmented reality, videos, the fanstore and more. A lot of these sections are loaded
                            into a web
                            view which is very user unfriendly like we experienced when we were using the app. This is
                            why we decided to only work on features that would add real value to PSV fans.
                            A mobile app is most valuable to have when you're not at home behind your desk. For this
                            reason we selected the loyal/more hardcore PSV fans as our <a class="txt-link"
                              target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/interviews">target
                              audience</a>. These type of fans often go to the Philips Stadium to watch a game. An app
                            that can save your ticket so that you can scan it at the stadium's entry is useful for the
                            target audience. Other features like 'Games' that focus on a young target audience are more
                            convenient to use on the PSV website or develop natively in a separate app instead of the web-views PSV uses.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Interviews</h3>
                        <div class="project-body">
                          <p>To understand the target audience we each searched for PSV fans that fit within the target
                            audience (loyal/more hardcore fans) and interviewed them to gain insight in what their
                            annoyances/struggles/goals/needs are.
                            Some of the insights are: PSV fans often share their season ticket with family and friends,
                            PSV fans like to have visual context when they're following a game via the app since they're
                            often confused about what's happening.
                            The insights from the <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/interviews">interviews</a>
                            were helpful later on when we started working on user stories.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Sprint 2 - Ideate & Prototype</h2>
                    <p>In this sprint we had all the ingredients to start ideating and prototyping. In the
                      previous sprint we focused on a more concrete target audience, and through interviews learned
                      what frustrations/goals/needs they had. Based on this information, user stories were formulated
                      and assigned to each project member.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-sub-wrapper">
                      <div class="project-h3-content">
                        <h3>User Stories</h3>
                        <div class="project-body">
                          <p>Max formulated most of the user stories. Each project member picked out one or two user
                            stories that they wanted to work on.</p>
                          <p>I decided to work on the user stories: "As a user I want to receive notifications on my
                            phone so that I can get realtime updates from the club" and "As a user I want to assign
                            tunes to notifications so that I know what kind of notification I received before I have
                            even seen them". I reformulated these user stories into one since the first one was too
                            generic and not
                            concrete while the other was too limited.</p>
                          <p>
                            The new user story became: "As a PSV fan I want to receive notifications that give a more
                            clear context when something
                            happens that's related to a (PSV football) game so that I can keep up with what's happening
                            and be more invested in the game".
                          </p>
                          <p>
                            In my <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/userstories">plan
                              of action</a>, I formulated a fitting main research question and design challenge: "How
                            can I
                            make the PSV fans feel more immersed through notifications?", "Design a notification system
                            for PSV
                            fans that follow games via the PSV app which allows them to get a more clear context of
                            what's happening in a game so that they become more immersed/invested into the game."
                          </p>
                          <p>The reason I picked up this user story, is because PSV fans I interviewed stated that they
                            sometimes don't know what's going on when there's a complicated situation in a game and are
                            relying on textual notifications. They feel like they're missing information and feel the
                            need for visual context (a video or images). This includes the PSV app, but also other
                            football score apps.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Researching PSV's notification system</h3>
                        <div class="project-body">
                          <p>My first research for the user story was <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/userstories">researching
                              the current notification system of
                              PSV's app</a>. The main question was to research what the notifications system looks like,
                            meaning how it works on a technical level and what it
                            looks like from the user's perspective. I learned what design was used to display
                            notifications and the notification settings by using the app for several weeks. This gave me
                            a good understanding of the user experience and how much the notification system contributes
                            to the immersion/game experience. One time
                            during a game, I didn't get any notifications at all from the app despite notifications
                            being enabled. This was solved by reopening the app, but another issue occurred later on
                            when
                            I received a few
                            notifications in the wrong order. The issue might have been my phone or network's fault
                            though since it
                            never happened again. </p>

                          <p>By talking
                            to PSV I also discovered that the
                            Gracenote API checks for a change in the database every minute and if something in the
                            database updates (for example a goal has been scored) it outputs the data to a
                            notification.
                            This means that the delay of notifications can take a whole minute, which is way longer
                            compared
                            to football score apps I tried out later on.</p>

                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Trend analysis football score apps</h3>
                        <div class="project-body">
                          <p>While I was researching PSV's notification system, I also started trying out other <a
                              class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/userstories">football
                              score apps</a> that were popular and had good reviews. This way I could compare the
                            notification
                            systems with PSV's notifications system and see how other apps create immersion/atmosphere
                            through the use of notifications. The goal, therefore, is to understand how other football
                            apps create more immersion/atmosphere around games for their users with the use of
                            notifications.</p>
                          <p>To start off the research I looked at the notification options for each of the football
                            score apps and enabled everything match related. During the next few weeks I received
                            notifications of
                            games. Something valuable I found is that the Feyenoord app was posting realtime photo's of
                            the game and lots of other visuals on a timeline. When you would click on a notification it
                            would bring you to that timeline so I felt like I was getting good context on what was
                            happening and enjoyed seeing images of the crowd enjoying themselves. Even before and after
                            the game they would post photos of players, fans, the stadium. If I was a Feyenoord fan I
                            would have most likely gotten very excited for the game so this could be a good addition for
                            improving the immersion of the PSV app.</p>
                          <p>One of the other apps I tested, posted images in notifications which helps give more
                            context
                            which on itself can increase the immersion. Most apps also offered notifications about when
                            the match would start, what the squad formation would be and when a penalty was given.
                            Penalties are a great way to build suspense since there's a high chance of a goal being
                            scored.</p>
                          <p>The trend analysis gave me a lot of inspiration for making a prototype.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Flutter notifications research</h3>
                        <div class="project-body">
                          <p>During the Sprint 1 presentation I advised to research <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/flutterNotifications">the
                              capabilities of Flutter</a> in
                            regard to notifications. This was needed since PSV wants to keep using notifications in the
                            app. I researched what the functionalities and best practices of Flutter's notification
                            capabilities are by applying desktop research and the literature study method.
                            Of course I was primarily working on my user story, so the main question was:</p>
                          <b><i>Which Flutter notification functionalities can be used to enhance the immersion of PSV
                              fans
                              around matches in the PSV app?</i></b>
                          <p>From this research I concluded that using the 'flutter_local_notifications' package
                            combined with the 'FlutterFire' functionalities would be the most useful, since the former
                            can display notifications while the user is in the app and the latter is for displaying push
                            notifications when the app is closed. They both offer
                            the same notification customizations like giving a notification a title, paragraph, sound,
                            image and a schedule which can potentially help create more immersion.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Designing</h3>
                        <div class="project-body">
                          <p>After gathering enough info about the target audience and trends, I started <a
                              class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/designTesting">designing</a>.
                            Figma was used to create the designs.
                            I started wireframing so that I could quickly decide what type of layout was needed and what
                            information the screens/pages would need to contain.
                            When I had my wireframes ready, I started creating a high-fidelity prototype based on the
                            wireframes. This meant adding colors, fonts, effects and interactivity.
                            During the wireframing and high-fidelity process I applied basic design
                            principles/guidelines and the branding guidelines
                            of PSV.
                            The basic principles/guidelines were; menu layouts, icons, content alignment and content
                            management.
                            The applied branding guidelines were; typography, color palette, icons.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Sprint 3 - Testing & Final delivery</h2>
                    <p>In this sprint it was mostly about getting the project ready to be delivered to the client and
                      present our findings to them.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-sub-wrapper">
                      <div class="project-h3-content">
                        <h3>Testing design</h3>
                        <div class="project-body">
                          <p>While I was designing I began thinking about what would needed to be tested. Of course the
                            main goal of the user story was to create more immersion for PSV fans through notifications,
                            so I made a <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/designTesting">test
                              plan</a> to be able to see if the design I created would create more immersion.
                            Unfortunately I was not able to get all the resources in time to carry out the test plan. In
                            my test plan I wanted to make a prototype that would simulate the current notification
                            system of PSV and compare it to my own designed notification system prototype. Sadly, I
                            needed to spare time for finishing the high-fidelity prototype and transfering the project
                            to the client correctly.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Final delivery</h3>
                        <div class="project-body">
                          <p>The last 1-2 weeks we wrapped up working on our user stories and discussed what the best
                            way to <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/designTesting">deliver
                              the project</a> was.
                            We figured it was best to create a well-organized folder in which we would include the most
                            valuable research and a 'delivery/transfer' document. This document contained references to
                            where they could find specific research in the folder, the link to our Figma designs, link
                            to the GitHub organization and finally our advice to PSV with a conclusion and
                            recommendations.
                            This folder was handed to PSV in an email after we presented our findings at TQ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Evaluation</h2>
                    <p>Looking back at the project I must say I'm happy about our process as a group. The start was
                      rough, because
                      the initial assignment wasn't 100% fit ICT & Media Design students. However, after a lot of
                      discussing with the client we agreed on a scoping that was a bit different. From then on we
                      applied our expertise and kept a good communication going with the client. The communication
                      within the group was good, but could have been better. For example, a few times project members
                      failed to
                      show up for the weekly Monday stand-up, because they forgot it was planned (despite it being
                      scheduled in MS
                      Teams). Next time I will send reminders on Sunday or advise my project members to set a reminder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>International project</h1>
                  <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>R. van Wijk, E. Banda, V.I. Petrove, S. Sodermans, V.A. Ivanova, T. Schiavone</i>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Preparation Week</h2>
                    <p>Before the project started, I had to contact my project members. In Teams I created a new team
                      and invited everyone. Unfortunately, the international guest student didn't respond to our emails.
                    </p>

                    <p>In our first meeting we discussed the first assignment which was about
                      understanding the metaverse. For the second assignment we each made a metaverse avatar that
                      represents ourselves, and as final assignment we made a group photo of the avatars, discussed
                      how we created our avatars and what our core message is of the metaverse.</p>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>International Week</h2>
                    <p>This time around, the international guest student did show up so we started brainstorming
                      metaverse concepts for each client we could choose from. We achieved this by doing desktop
                      research on the clients to understand what products/services they offered and then writing down
                      metaverse ideas on a whiteboard that could improve those products/services.
                      After voting, we chose to continue with Boymans.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>Context & Concept</h3>
                      <p>Boymans is a museum in Rotterdam. This means it sells an experience. Visitors can walk around
                        the museum and
                        learn about artworks of all kinds. Of course, visitors can't just touch everything and have to
                        keep their distance to some of the artworks. Especially for kids it can be tempting to touch
                        everything, run around out of boredom or pure concentration problems.</p>

                      <p>What if the children can run around, get as close to artworks as they want to, touch them, even
                        throw them around, smash them, getting rid off all their energy and experimenting like
                        kids love to do. The metaverse makes this possible. Kids can stay home and use their VR system
                        to visit the Boymans museum virtually. This way Boymans won't have to worry about kids causing
                        chaos and damage while the kids can do whatever they like in the virtual museum.</p>
                      <p>Of course the main purpose of a museum is to educate. For this reason we added another element
                        to the concept; kids get to see information popup about the (hi)story behind artworks by
                        standing in front of it. The information is followed by 3 interactive props. One of the props is
                        related to the artwork and if chosen, the kids can destroy the artwork with the prop.</p>
                    </div>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <div class="project-h3-content">
                        <h3>Designs & video prototyping</h3>
                        <p>After concepting we made visualizations of what we imagine the concept would look like. I made visualizations of the concept with Photoshop that would be used in the <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/designTesting">video prototype</a>.
                          The video prototype would be perfect as a pitch of our concept.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paddedTextLine"></div>
            <div class="project-h1-section">
              <div class="project-h1-wrapper">
                <div class="project-h1-content">
                  <h1>Individual project</h1>
                  <div class="collab-cont">
                    <svg-icon class="svg-collab" name="collab" />
                    <i>R. van Wijk</i>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>H2</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam cum quia quos fugit provident
                      voluptates facere incidunt? Laboriosam esse, quibusdam optio, tempore, eius deserunt modi ut
                      voluptate sint inventore eum nisi corrupti fugit. Dolores enim, veniam quam impedit quod magnam
                      nesciunt sint repellat fugit corrupti sit dolorem! Qui accusantium odit numquam accusamus quis
                      assumenda laborum id amet culpa? Exercitationem ipsa neque architecto officia nemo?</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>H3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <NuxtLink to="/semesters/semesterSix"><button class="btnModalClose bntModalClose-bg-color">Close</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLink to="/semesters/semesterSix" class="close-modal">
      <div class="filler"></div>
    </NuxtLink>
  </div>

</template>

<script>
  export default {
    layout: 'noNav',
  }

</script>

<style>
  @import '~/assets/css/modal.css';

  .collab-cont {
    display: flex;
    gap: .5em;
    padding: 1em 0 0 0;
  }

  .svg-collab {
    display: flex;
    width: 38px;
    height: 23px;
    fill: #4758FB;
  }


  .project-h2-content p,
  .project-h3-content p {
    max-width: 50em;
  }

</style>
