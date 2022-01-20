(()=>{"use strict";const e=(()=>{const e=[],t=t=>{let d=e.find((e=>e.getName()===t));return d||(d=(e=>{let t=e,d=[];return{getName:()=>t,addHandler:e=>{d.push(e)},invokeHandlers:e=>{d.forEach((t=>{t(e)}))}}})(t),e.push(d)),d};return{publish:(e,d)=>{t(e).invokeHandlers(d)},subscribe:(e,d)=>{t(e).addHandler(d)}}})(),t=(()=>{const t=document.querySelector(".category-container"),d=document.querySelector(".add-category");let n=null;const r=(e,t=null,d=null)=>{const n=document.createElement(e);return t&&t.forEach((e=>n.classList.add(e))),d&&(n.textContent=d),n},i=(t,d)=>{n&&n.classList.remove("active"),t.classList.add("active"),n=t,e.publish("categoryActive",d)},a=e=>{const d=(e=>{const t=r("div",["category"]);return t.appendChild(r("div",["text"],e.getName())),t.appendChild(r("div",["delete","btn"],"x")),t})(e);t.appendChild(d),(e=>{const d=t.lastChild,n=d.lastChild;n.addEventListener("click",(t=>{t.stopPropagation(),s(n.parentNode,e.getName())})),d.addEventListener("click",(()=>{i(d,e.getName())}))})(e),i(d,e.getName())},s=(t,d)=>{t.remove(),e.publish("removeCategory",d)},o=document.querySelector(".item-container"),c=document.querySelector(".add-item"),l=e=>{for(;o.childElementCount>0;)o.lastChild.remove();e.map((e=>u(e)))},u=e=>{o.appendChild((e=>{const t=r("div",["item"]),d=document.createElement("input");return d.type="checkbox",t.appendChild(d),t.appendChild(r("div",["text"],e.content)),t.appendChild(r("div",["delete","btn"],"x")),t})(e))};return{init:()=>{d.addEventListener("click",(()=>{e.publish("addCategory",prompt("Enter"))})),c.addEventListener("click",(()=>{const t=n.firstChild.textContent,d=prompt("Enter");e.publish("addItem",{activeCategoryName:t,itemContent:d})})),e.subscribe("categoryAdded",a),e.subscribe("categoryItemsLoaded",l),e.subscribe("itemAdded",u)}}})(),d=t;(()=>{const t=[],d=e=>t.find((t=>t.getName()===e)),n=n=>{if(d(n))return void alert("This category already exists!");const r=(e=>{let t=e,d=[];return{getName:()=>t,addItem:e=>{const t={id:0,content:e};return d.push(t),t},getItems:()=>d}})(n);t.push(r),e.publish("categoryAdded",r)},r=e=>{const n=t.indexOf(d(e));t.splice(n,1)},i=t=>{const n=d(t).getItems();e.publish("categoryItemsLoaded",n)},a=t=>{const n=d(t.activeCategoryName).addItem(t.itemContent);e.publish("itemAdded",n)};return{init:()=>{e.subscribe("addCategory",n),e.subscribe("removeCategory",r),e.subscribe("categoryActive",i),e.subscribe("addItem",a)}}})().init(),d.init(),e.publish("addCategory","All"),e.publish("addCategory","Random"),e.publish("addCategory","Categories")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQWUsY0FBZSxPQUM5QixVQUFlLGNBQWUsVUFDOUIsVUFBZSxjQUFlLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL21vZHVsZXMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvbW9kdWxlcy9jYXRlZ29yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuRXZlbnRzIDpcblxuYWRkSXRlbVxuaXRlbUFkZGVkXG5cbmFkZENhdGVnb3J5XG5yZW1vdmVDYXRlZ29yeVxuY2F0ZWdvcnlBZGRlZFxuY2F0ZWdvcnlSZW1vdmVkXG5cbiovXG5cblxuY29uc3QgX0V2ZW50ID0gKGV2ZW50TmFtZSkgPT4ge1xuICAgIGxldCBuYW1lID0gZXZlbnROYW1lO1xuICAgIGxldCBoYW5kbGVycyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgYWRkSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSAgIFxuICAgIGNvbnN0IGludm9rZUhhbmRsZXJzID0gKGV2ZW50QXJncykgPT4ge1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgIGZuKGV2ZW50QXJncyk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgICByZXR1cm4geyBnZXROYW1lLCBhZGRIYW5kbGVyLCBpbnZva2VIYW5kbGVycyx9O1xufVxuXG5jb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9ldmVudHMgPSBbXTtcblxuICAgIGNvbnN0IGNoZWNrRXZlbnQgID0gKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBfZXZlbnRzLmZpbmQoZXZlbnQgPT4gZXZlbnQuZ2V0TmFtZSgpID09PSBldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICBldmVudCA9IF9FdmVudChldmVudE5hbWUpO1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGV2ZW50QXJncykgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IGNoZWNrRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgZXZlbnQuaW52b2tlSGFuZGxlcnMoZXZlbnRBcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gY2hlY2tFdmVudChldmVudE5hbWUpO1xuICAgICAgICBldmVudC5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHB1Ymxpc2gsIFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHViU3ViOyIsImltcG9ydCBQdWJTdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcblxuICAgIC8qXG4gICAgQ2F0ZWdvcmllcyBVSVxuICAgICovXG5cbiAgICBjb25zdCAkY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY29udGFpbmVyJyk7XG4gICAgY29uc3QgJGFkZENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jYXRlZ29yeScpO1xuICAgIGxldCAkY3VycmVudEFjdGl2ZSA9IG51bGw7XG5cbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9ICh0eXBlLCBjbGFzc0FycmF5ID0gbnVsbCwgY29udGVudCA9IG51bGwpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChjbGFzc0FycmF5KSBjbGFzc0FycmF5LmZvckVhY2goY2xzID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCAkY2F0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnY2F0ZWdvcnknXSk7XG4gICAgICAgICRjYXQuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsndGV4dCddLCBjYXRlZ29yeS5nZXROYW1lKCkpKTtcbiAgICAgICAgJGNhdC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydkZWxldGUnLCAnYnRuJ10sICd4JykpO1xuICAgICAgICByZXR1cm4gJGNhdDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDYXRlZ29yeUxpc3RlbmVyID0gKGNhdCkgPT4ge1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnkgPSAkY2F0ZWdvcnlDb250YWluZXIubGFzdENoaWxkO1xuICAgICAgICBjb25zdCAkZGVsZXRlYnRuID0gJGNhdGVnb3J5Lmxhc3RDaGlsZDtcblxuICAgICAgICAkZGVsZXRlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZW1vdmVDYXRlZ29yeSgkZGVsZXRlYnRuLnBhcmVudE5vZGUsIGNhdC5nZXROYW1lKCkpO1xuICAgICAgICB9KVxuXG4gICAgICAgICRjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZSgkY2F0ZWdvcnksIGNhdC5nZXROYW1lKCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFjdGl2ZSA9ICgkY2F0ZWdvcnksIGNhdGVnb3J5TmFtZSkgPT4ge1xuICAgICAgICBpZiAoJGN1cnJlbnRBY3RpdmUpICRjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJGN1cnJlbnRBY3RpdmUgPSAkY2F0ZWdvcnk7XG4gICAgICAgIFxuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2F0ZWdvcnlBY3RpdmUnLCBjYXRlZ29yeU5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENhdGVnb3J5ID0gKGNhdCkgPT4ge1xuICAgICAgICBjb25zdCAkbmV3Q2F0ZWdvcnkgPSBuZXdDYXRlZ29yeShjYXQpO1xuICAgICAgICAkY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoJG5ld0NhdGVnb3J5KTtcbiAgICAgICAgYWRkQ2F0ZWdvcnlMaXN0ZW5lcihjYXQpO1xuICAgICAgICBzZXRBY3RpdmUoJG5ld0NhdGVnb3J5LCBjYXQuZ2V0TmFtZSgpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9ICgkY2F0ZWdvcnksIGNhdGVnb3J5TmFtZSkgPT4ge1xuICAgICAgICAkY2F0ZWdvcnkucmVtb3ZlKCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdyZW1vdmVDYXRlZ29yeScsIGNhdGVnb3J5TmFtZSk7XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIEl0ZW1zIFVJXG4gICAgKi9cbiAgICBcbiAgICBjb25zdCAkaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0ICRhZGRJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XG5cbiAgICBjb25zdCBuZXdJdGVtRE9NID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydpdGVtJ10pO1xuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAkY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICRpdGVtLmFwcGVuZENoaWxkKCRjaGVja0JveCk7XG4gICAgICAgICRpdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBbJ3RleHQnXSwgaXRlbS5jb250ZW50KSk7XG4gICAgICAgICRpdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBbJ2RlbGV0ZScsICdidG4nXSwgJ3gnKSk7XG4gICAgICAgIHJldHVybiAkaXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93SXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgICAgICAgd2hpbGUoJGl0ZW1Db250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKSBcbiAgICAgICAgICAgICRpdGVtQ29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTsgIC8vIENsZWFyIGNvbnRlbnRzXG5cbiAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT4gYWRkSXRlbURPTShpdGVtKSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRJdGVtRE9NID0gKGl0ZW0pID0+IHtcbiAgICAgICAgJGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbURPTShpdGVtKSk7XG4gICAgICAgIC8vYWRkSXRlbUxpc3RlbmVyKGl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAkYWRkQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBQdWJTdWIucHVibGlzaCgnYWRkQ2F0ZWdvcnknLCBwcm9tcHQoJ0VudGVyJykpO1xuICAgICAgICB9KVxuXG4gICAgICAgICRhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnlOYW1lID0gJGN1cnJlbnRBY3RpdmUuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gcHJvbXB0KCdFbnRlcicpO1xuICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2goJ2FkZEl0ZW0nLCB7YWN0aXZlQ2F0ZWdvcnlOYW1lLCBpdGVtQ29udGVudH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NhdGVnb3J5QWRkZWQnLCBhZGRDYXRlZ29yeSk7XG5cbiAgICAgICAgUHViU3ViLnN1YnNjcmliZSgnY2F0ZWdvcnlJdGVtc0xvYWRlZCcsIHNob3dJdGVtcyk7XG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2l0ZW1BZGRlZCcsIGFkZEl0ZW1ET00pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuXG5cblxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi9tb2R1bGVzL3B1YnN1YlwiO1xuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9tb2R1bGVzL2NhdGVnb3J5XCJcblxuY29uc3QgQ2F0ZWdvcnlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIC8vIENhdGVnb3J5XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW107XG5cbiAgICBjb25zdCBnZXRDYXRlZ29yeSA9IChjYXRlZ29yeU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0LmdldE5hbWUoKSA9PT0gY2F0ZWdvcnlOYW1lKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYWRkQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gICAgICAgIGlmIChnZXRDYXRlZ29yeShjYXRlZ29yeU5hbWUpKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBjYXRlZ29yeSBhbHJlYWR5IGV4aXN0cyEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXQgPSBDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ2NhdGVnb3J5QWRkZWQnLCBjYXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGNhdGVnb3JpZXMuaW5kZXhPZihnZXRDYXRlZ29yeShjYXRlZ29yeU5hbWUpKTtcbiAgICAgICAgY2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEl0ZW1zXG5cbiAgICBjb25zdCBnZXRJdGVtcyA9IChjYXRlZ29yeU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRDYXRlZ29yeShjYXRlZ29yeU5hbWUpLmdldEl0ZW1zKCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjYXRlZ29yeUl0ZW1zTG9hZGVkJywgaXRlbXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbUluZm9PYmopID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2F0ID0gZ2V0Q2F0ZWdvcnkoaXRlbUluZm9PYmouYWN0aXZlQ2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFjdGl2ZUNhdC5hZGRJdGVtKGl0ZW1JbmZvT2JqLml0ZW1Db250ZW50KTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ2l0ZW1BZGRlZCcsIGl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2FkZENhdGVnb3J5JywgYWRkQ2F0ZWdvcnkpO1xuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKCdyZW1vdmVDYXRlZ29yeScsIHJlbW92ZUNhdGVnb3J5KTtcblxuICAgICAgICBQdWJTdWIuc3Vic2NyaWJlKCdjYXRlZ29yeUFjdGl2ZScsIGdldEl0ZW1zKTtcbiAgICAgICAgUHViU3ViLnN1YnNjcmliZSgnYWRkSXRlbScsIGFkZEl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgfTtcbn0pKCk7XG5cbkNhdGVnb3J5Q29udHJvbGxlci5pbml0KCk7XG5VSS5pbml0KCk7XG5cblB1YlN1Yi5wdWJsaXNoKCdhZGRDYXRlZ29yeScsICdBbGwnKTtcblB1YlN1Yi5wdWJsaXNoKCdhZGRDYXRlZ29yeScsICdSYW5kb20nKTtcblB1YlN1Yi5wdWJsaXNoKCdhZGRDYXRlZ29yeScsICdDYXRlZ29yaWVzJyk7XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBJdGVtID0gKGlkLCBjb250ZW50KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgfTtcbn1cblxuY29uc3QgQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBjYXRlZ29yeU5hbWU7XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbUNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IEl0ZW0oMCwgaXRlbUNvbnRlbnQpO1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgXG4gICAgLy8gfVxuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBpdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGFkZEl0ZW0sXG4gICAgICAgIGdldEl0ZW1zLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5OyJdLCJuYW1lcyI6WyJfZXZlbnRzIiwiY2hlY2tFdmVudCIsImV2ZW50TmFtZSIsImV2ZW50IiwiZmluZCIsImdldE5hbWUiLCJuYW1lIiwiaGFuZGxlcnMiLCJhZGRIYW5kbGVyIiwiaGFuZGxlciIsInB1c2giLCJpbnZva2VIYW5kbGVycyIsImV2ZW50QXJncyIsImZvckVhY2giLCJmbiIsIl9FdmVudCIsInB1Ymxpc2giLCJzdWJzY3JpYmUiLCJVSSIsIiRjYXRlZ29yeUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRhZGRDYXRlZ29yeUJ0biIsIiRjdXJyZW50QWN0aXZlIiwiY3JlYXRlSHRtbEVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NBcnJheSIsImNvbnRlbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNscyIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50Iiwic2V0QWN0aXZlIiwiJGNhdGVnb3J5IiwiY2F0ZWdvcnlOYW1lIiwicmVtb3ZlIiwiYWRkQ2F0ZWdvcnkiLCJjYXQiLCIkbmV3Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsIiRjYXQiLCJhcHBlbmRDaGlsZCIsIm5ld0NhdGVnb3J5IiwibGFzdENoaWxkIiwiJGRlbGV0ZWJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlQ2F0ZWdvcnkiLCJwYXJlbnROb2RlIiwiYWRkQ2F0ZWdvcnlMaXN0ZW5lciIsIiRpdGVtQ29udGFpbmVyIiwiJGFkZEl0ZW1CdG4iLCJzaG93SXRlbXMiLCJpdGVtcyIsImNoaWxkRWxlbWVudENvdW50IiwibWFwIiwiaXRlbSIsImFkZEl0ZW1ET00iLCIkaXRlbSIsIiRjaGVja0JveCIsIm5ld0l0ZW1ET00iLCJpbml0IiwicHJvbXB0IiwiYWN0aXZlQ2F0ZWdvcnlOYW1lIiwiZmlyc3RDaGlsZCIsIml0ZW1Db250ZW50IiwiY2F0ZWdvcmllcyIsImdldENhdGVnb3J5IiwiYWxlcnQiLCJhZGRJdGVtIiwiaWQiLCJnZXRJdGVtcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIml0ZW1JbmZvT2JqIl0sInNvdXJjZVJvb3QiOiIifQ==