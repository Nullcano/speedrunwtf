<style>
  section {
    display: flex;
    flex-direction: row;
  }

  .submission-box {
    width: 100%;
    margin: .5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.3);
  }

  label {
    display: flex;
    align-items: center;
    width: calc(100% - 1rem);
    margin-bottom: .5rem;
    padding: .5rem;
    background: #111;
    font-size: 1.2rem;
    border-radius: .2rem;
  }
  
  label .fas {
    margin-right: .5rem;
    width: 2.5rem;
    text-align: center;
  }

  input, textarea, select {
    width: 100%;
    background: transparent;
    border: 0;
    color: #fff;
    font-family: inherit;
    font-size: 1.2rem;
  }

  button {
    width: 100px;
    padding: .5rem;
    background: #dfb450;
    color: #111;
    font-size: 1.25rem;
    border: 0;
    border-radius: .2rem;
  }

  button .fas {
    color: #111;
  }

  @media screen and (max-width: 40rem) { 
    section { 
      flex-direction: column;
    }
    .submission-box {
      margin: 0;
    }
  }
</style>

<svelte:head>
	<title>Submit - speedrun.wtf</title>
</svelte:head>

<h1>Submission Forms</h1>

<section>
  <form class="submission-box" name="run" method="POST" data-netlify="true">
    <h2>Submit a Run</h2>
    <label>
      <i class="fas fa-user"></i>
      <input type="text" name="name" placeholder="Name" />
    </label>
    <label>
      <i class="fas fa-gamepad"></i>
      <input type="text" name="game" placeholder="Game" />
    </label>
    <label>
      <i class="fas fa-layer-group"></i>
      <input type="text" name="category" placeholder="Category" /></label>
    <label>
      <i class="fas fa-clock"></i>
      <input type="text" name="time" placeholder="Time" />
    </label>
    <label>
      <i class="fas fa-video"></i>
      <input type="url" name="video" placeholder="Video/VOD URL" /></label>
    <label>
      <i class="fas fa-comment"></i>
      <textarea name="message" placeholder="Comments"></textarea>
    </label>
    <button type="submit">Send <i class="fas fa-paper-plane"></i></button>
  </form>
  <form class="submission-box" name="other" method="POST" data-netlify="true">
    <h2>Other Inquiries</h2>
    <label>
      <i class="fas fa-user"></i>
      <input type="text" name="name" placeholder="Name" />
    </label>   
    <label>
      <i class="fas fa-at"></i>
      <input type="email" name="email" placeholder="Email" />
    </label>
    <label>
      <i class="fas fa-tag"></i>
      <select name="type[]" multiple>
        <option value="category-request">Category Request</option>
        <option value="game-request">Game Request</option>
        <option value="other">Other</option>
      </select>
    </label>
    <label>
      <i class="fas fa-envelope"></i>
      <textarea name="message" placeholder="Message"></textarea>
    </label>
    <button type="submit">Send <i class="fas fa-paper-plane"></i></button>
  </form>
</section>