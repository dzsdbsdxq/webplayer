/**
 * Demo，Directive
 */
export default {
  install: (app: { directive: (arg0: string, arg1: { updated(el: any): void }) => void }) => {
    app.directive('scrollBottom', {
      updated(el) {
        // 这里的el即是绑定指令处的dom元素
        el.scrollTo({
          top: el.scrollHeight - el.clientHeight,
          behavior: 'smooth',
        });
      },
    });
  },
};
