/**
 * Reveals the navigation menu.
 * @param {*} links_id 
 */
function showMenu(nav_id) {
    const links_button = document.getElementById(nav_id);
    links_button.style.width = "200px";
}

/**
 * Hides the navigation menu.
 * @param {*} links_id 
 */
function hideMenu(nav_id) {
    const links_button = document.getElementById(nav_id);
    links_button.style.width = "0px";
}

/**
 * Fades out the old page and fades in the new page.
 * @param {*} old_page 
 * @param {*} new_page 
 */
function changePage(old_page, new_page, links) {
    hideMenu(links)
    const old_content = document.getElementById(old_page);
    const new_content = document.getElementById(new_page);

    old_content.style.animation = "fadeOut 1s"
    new_content.style.animation = "fadeIn 1s"
}