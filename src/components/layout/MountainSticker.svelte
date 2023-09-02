<div class="mountain-sticker">
  <div class="outer-square">
    <div class="inner-circle">
      <div class="sticker">
        <div class="large-rect" />
        <div class="small-rect" />
      </div>
    </div>
  </div>
</div>

<style>
  .mountain-sticker {
    display: flex;
    height: 100%;
  }

  .outer-square {
    --square-size: 300px;
    --square-bg: #293462;

    margin: auto;
    display: flex;
    height: var(--square-size);
    width: var(--square-size);
    background: var(--square-bg);
  }

  .outer-square .inner-circle {
    --circle-size: 200px;

    margin: auto;
    display: flex;
    height: var(--circle-size);
    width: var(--circle-size);
    border-radius: 50%;
    overflow: hidden;
    background: transparent;
  }

  .sticker {
    --yellow-100: #fef9c3;
    --rect-bg: #fe5f55;
    --sticker-size: 200px;

    rotate: 40deg;
    margin: auto;
    position: relative;
    height: var(--sticker-size);
    width: var(--sticker-size);
    background: var(--yellow-100);
  }

  .sticker .large-rect {
    position: absolute;
    top: 20%;
    left: 50%;
    height: 100%;
    width: 100%;
    background: var(--rect-bg);
  }

  .sticker .small-rect {
    position: absolute;
    top: 80%;
    left: 35%;
    height: 100%;
    width: 100%;
    background: var(--rect-bg);
  }
</style>
