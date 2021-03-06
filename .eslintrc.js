module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["./node_modules/@agronkabashi/eslint-config/config.json"],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "no-magic-numbers": 0
  },
  globals: {
    // PICO 8 stuff
    btn: true,
    btnp: true,
    camera: true,
    cartdata: true,
    circ: true,
    circfill: true,
    clip: true,
    cls: true,
    cocreate: true,
    color: true,
    coresume: true,
    costatus: true,
    cstore: true,
    cursor: true,
    del: true,
    dget: true,
    dset: true,
    extcmd: true,
    fget: true,
    fillp: true,
    fset: true,
    line: true,
    map: true,
    memcpy: true,
    memset: true,
    menuitem: true,
    mget: true,
    mset: true,
    music: true,
    pal: true,
    palt: true,
    peek: true,
    pget: true,
    poke: true,
    print: true,
    pset: true,
    rect: true,
    rectfill: true,
    reload: true,
    sfx: true,
    sget: true,
    spr: true,
    sset: true,
    sspr: true,
    time: true
  }
};
