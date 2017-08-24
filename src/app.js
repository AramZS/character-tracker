import statBox from './VueComponents/statBox';

export function initVue (initEvent){
    console.log('init: ', initEvent);
    var character = initEvent.detail.character;
    new Vue({
      el: '#app',
      data: {
          title: character.character_name,
          stat_modifiers: character.stat_modifiers,
          stats: character.stats
      }
    });

}

window.addEventListener('initVueEvent', initVue );
