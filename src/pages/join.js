import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Join = () => {
  return (
    <Layout>
      <SEO title="Join the Choir" />
      <h1>Join Summerside Community Choir!</h1>
      <h3 style={{fontStyle: "italic", paddingLeft: "3rem"}}>COVID-19 in 2021:</h3>
      <p style={{fontStyle: "italic", paddingLeft: "3rem", paddingRight: "3em"}}>We are planning to resume in-person rehearsals for the Fall 2021 term in September, subject to public health recommendations, and welcome new members to sing with us. We will have more information prior to the start of the term.</p>
     
      <p>We welcome new members for the first three weeks of rehearsals at the beginning of each term in September and January. There is no formal audition process for new members. Those who wish to join as a new singer can simply show up to the first rehearsal, at which point music will be distributed to all singers and you will choose your voice part (Soprano, 2nd Soprano, Alto, Tenor, Baritone, Bass). You are welcome to contact us ahead of time with questions, and we encourage a note just to let us know you might be coming so you’ll get all the same pre-term prep info and notifications as our registered members, but it’s not required.</p>

      <p>All new members will be automatically accepted on a trial basis for a probationary period of approximately one month. This is to ensure that you and the choir are a good fit for each other. You will not be required to formally audition, but our Director may choose to meet with you privately to discuss your fit with the choir, or within your vocal section. This may include listening to your voice privately.</p>
      <p>We welcome dedicated, enthusiastic singers of all experience levels to start at the beginning of a new term. Although we are an unauditioned choir, it should be noted that our choral arrangements are challenging and will require personal practice outside of rehearsals to learn notes, as well as the ability to carry a tune, sing in harmony and blend with the group. We also have a strict attendance policy, so commitment to weekly rehearsals and keeping up with any assigned “homework” is important. All choir members will receive a copy of our full policies and member responsibilities at the beginning of each term.</p>
      <p>Previous choral experience is an asset, and is expected, but not absolutely required. It is assumed (but again, not required) that you know your voice type and which vocal section you wish to join.</p>
      <p>If you have never sung choir pieces in four-part (SATB) harmony before, we do recommend that you show up early before practice or contact our Director ahead of time so that you can be placed in a vocal section. More information about choosing a vocal part can be found in articles such as <Link to="https://www.musicalbri.com/what-is-my-voice-type/">What Is My Voice Type?</Link></p>
      <p>If you have any questions about joining the choir, please feel free to contact us.</p>
      
      <h3>PRACTICAL REHEARSAL INFO</h3>

      <p>Rehearsals are held weekly, Tuesday nights from 7:00 p.m. to 9:00 p.m. at <Link to="https://trinitysummerside.ca/">Trinity United Church</Link> at <Link to="https://www.google.com/maps?q=90+spring+st,+summerside,+prince+edward+island&hl=en&sll=37.0625,-95.677068&sspn=58.076329,135.263672&oq=90+&hnear=90+Spring+St,+Summerside,+Prince+County,+Prince+Edward+Island+C1N+3E6,+Canada&t=m&z=16">90 Spring Street in Summerside</Link>. These rehearsals, as well as any change to our normal schedule, can be viewed on our <Link to="/calendar/">calendar page</Link> or by subscribing to the <Link to="https://calendar.google.com/calendar/u/0/embed?src=sumchoir@gmail.com&ctz=America/Halifax">Summerside Choir’s Google Calendar</Link>.</p>
      <p>The door is usually unlocked by 6:30 p.m. and there is ample parking in the church parking lot. Most rehearsals, especially early in the term, are held in the basement. Please show up early enough that you are in your seat and ready to start warm-ups at 7:00 p.m. sharp!</p>
      <p>In the case of snow or rain, we ask that you leave your wet shoes/boots upstairs at the main entrance and bring slippers or indoor shoes for rehearsals.</p>
      <p>Please bring a pencil and eraser for making (temporary) notes on your music but NO pens or highlighters! Please also bring a binder or sturdy folder to protect the music you’ll receive. Feel free to bring a water bottle, to keep you hydrated.</p>

      <h3>COMMUNITY SERVICE BURSURY FOR PEI HIGH SCHOOL STUDENTS</h3>
      <p>The Summerside Community Choir is a registered organization participating in the <Link to="https://www.princeedwardisland.ca/en/information/education-and-lifelong-learning/community-service-bursary">Community Service Bursary Program</Link>. Grade 11 and 12 students may count up to 100 hours singing with the choir (at a rate of $5/hour) towards a post-secondary bursary.</p>
      
    </Layout>
  )
}

export default Join