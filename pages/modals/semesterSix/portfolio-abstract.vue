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
                    <a target="_blank" href=""><button class="btnModalClose bntModalClose-bg-color">View reading guide
                        in
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
                            about their problem.</p>
                          <p>Based on the information from the debriefing, me and Dary, created the first version of the
                            <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/projectPlan">project
                              plan</a>.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Researching software architecture</h3>
                        <div class="project-body">
                          <p>While waiting for meetings with PSV to update the project plan, we were doing
                            research on the current situation. I did literature research on what entities the
                            architecture of PSV's
                            media platforms consisted of. This would help give us an overview on what could be improved
                            while keeping into account the existing software architecture (e.g. API's) and stakeholders.
                            The knowledge was
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
                          <p>The current PSV app has lots of features/sections we weren't sure of that they're useful to
                            their target audience. This is
                            why we decided to only work on features that would add real value to PSV fans.
                            A mobile app is most valuable to have when you're not at home behind your desk. For this
                            reason we selected the loyal/more hardcore PSV fans as our <a class="txt-link"
                              target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/interviews">target
                              audience</a>. These type of fans often go to the Philips Stadium to watch a game. An app
                            that can save your ticket so that you can scan it at the stadium's entry is useful for the
                            target audience.</p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Interviews</h3>
                        <div class="project-body">
                          <p>To understand the target audience we each searched for PSV fans that fit within the target
                            audience (loyal/more hardcore fans) and interviewed them to gain insight in what their
                            annoyances/struggles/goals/needs are.
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
                    <p>In the
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
                          <p>I decided to work on two user stories. I reformulated these user stories into one since the
                            first one was too
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
                              of action</a>, I formulated a fitting main research question and design challenge
                          </p>
                        </div>
                      </div>
                      <div class="project-h3-content">
                        <h3>Researching PSV's notification system</h3>
                        <div class="project-body">
                          <p>My first research for the user story was researching
                            the <a class="txt-link" target="_blank"
                              href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/userstories">current
                              notification system </a>of
                            PSV's app. The main question was to research what the notifications system looks like,
                            meaning how it works on a technical level and what it
                            looks like from the user's perspective. I learned what design was used to display
                            notifications and the notification settings by using the app for several weeks. This gave me
                            a good understanding of the user experience and how much the notification system contributes
                            to the immersion/game experience.</p>

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
                            apps create more immersion/atmosphere around games for their users through the use of
                            notifications.</p>
                          <p>I concluded that showing images of the game, sending frequent notifications of events and
                            adding custom sounds improved the immersion.</p>
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
                            capabilities are by applying desktop research and the literature study method.</p>
                          <b><i>Which Flutter notification functionalities can be used to enhance the immersion of PSV
                              fans
                              around matches in the PSV app?</i></b>
                          <p>From this research I concluded that using the 'flutter_local_notifications' package
                            combined with the 'FlutterFire' functionalities would be the most useful. Both offer
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

                    <p>In this week, me and other students studied the metaverse as <a class="txt-link" target="_blank"
                        href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/prepweek">preparation</a>
                      for the international week. In our first meeting we discussed the first assignment which was about
                      understanding the metaverse. For the second assignment we each made a metaverse avatar that
                      represents ourselves, and as final assignment we made a group photo of the avatars, discussed
                      how we created our avatars and what our joint opinion of the metaverse is.</p>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>International Week</h2>
                    <p>In this week we started brainstorming
                      metaverse concepts for a selection of clients. We achieved this by doing desktop
                      research on the clients to understand what products/services they offered and then writing down
                      metaverse ideas on a whiteboard that could improve those products/services.
                      After voting, we chose to continue with Boymans.</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>Context & Concept</h3>
                      <p>For Boymans museum we came up with a potentially valuable <a class="txt-link" target="_blank"
                          href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/metaconcept">metaverse
                          concept.</a> This was
                        accomplished by applying group brainstorming as a method.</p>
                    </div>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <div class="project-h3-content">
                        <h3>Designs & video prototyping</h3>
                        <p>After concepting we made visualizations of what we imagine the concept would look like. I
                          made visualizations of the concept with Photoshop that would be used in the <a
                            class="txt-link" target="_blank"
                            href="https://rickvwijk1.github.io/rvwijk_portfolio/modals/semesterSix/metavideo">video
                            prototype</a>.
                          The video prototype would be perfect as a pitch of our concept.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Evaluation</h2>
                    <p>

                    </p>
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
                    <h2>Define</h2>
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
                      <h3>Project Plan</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Empathize</h2>
                    <p>Lorem</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>Target audience & Interviews</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Prototype & Test</h2>
                    <p>Lorem</p>
                  </div>
                </div>
                <div class="project-h3-section">
                  <div class="project-h3-wrapper">
                    <div class="project-h3-content">
                      <h3>Designing</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam odio quasi quaerat
                        veritatis ipsum nihil suscipit, a culpa aliquid, eveniet quod animi recusandae saepe beatae
                        voluptates sint ullam tempore.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-h2-section">
                <div class="project-h2-wrapper">
                  <div class="project-h2-content">
                    <h2>Evaluation</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error qui omnis dolore hic a? Explicabo
                      reprehenderit unde voluptas sed adipisci.
                    </p>
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
