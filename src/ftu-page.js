import "./styles/ftu-page.css"

export default {
  markup: `
      <div id="ftu-page-root">
        <section class="info-card">
          <img src="dist/images/cloud-logo.png" />
          <section class="info-card-header">
            Powerful cloud-based voting software tailored
            for your needs!
          </section>
        </section>
        <section class="info-card">
          <section class="info-card-header">
            1. Sign up with CloudVote and create your own profile!
          </section>
          <section class="info-card-body">
            <form>
              <span style="margin-right: 4px;">Sign up: </span>
              <input type="text" placeholder="E-mail address" />
              <input type="button" value="Go!" />
            </form>
          </section>
        </section>
        <section class="info-card">
          <section class="info-card-header">
            2. Customize your election needs us and schedule its
            opening!
          </section>
        </section>
        <section class="info-card">
          <section class="info-card-header">
            3. Sit back and watch votes casting in real-time with
            our profiling tools!
          </section>
        </section>
      </div>
  `
}
