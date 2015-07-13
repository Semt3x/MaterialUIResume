var routes = {};

function route(path, templateId) {
    routes[path] = {
        templateId: templateId
    };
}
var el = null;

function router() {
    // Lazy load view element:
    el = el || document.getElementById('mainView');


    // Current route url (getting rid of '#' in hash as well):
    var url = location.hash.slice(1) || '/';
    // Get route by url:
    var route = routes[url];
    // Do we have both a view and a route?
    if (el && route.templateId) {
        // Render route template with John Resig's template engine:
        $("main").load("/partials/" + route.templateId + ".html", function(){
            componentHandler.upgradeDom();
        });
        $(".mdl-layout-title").text(route.templateId);
        
    }
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);

route('/', 'Home');
route('/Home', 'Home');
route('/Me', 'Me');
route('/Skills', 'Skills');
route('/Recom', 'Recom');
route('/Diplomas', 'Diplomas');
route('/Contact', 'Contact');
route('/About', 'About');
route('/Jobs', 'Jobs');