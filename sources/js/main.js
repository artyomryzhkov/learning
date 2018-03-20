var current_month = new Date().getMonth();
var current_year = new Date().getFullYear();
var current_view = 'year';
var previous_button = 'year_button';
window.onload = function () {
     var month_year = getCurrentMonth (current_month, current_year);
     var new_days = getCurrentDays (current_month, current_year);
     getCurrentViewDate(current_view, current_year,current_month);
     document.getElementsByClassName("current_month")[0].innerHTML = month_year[0] + '<br>' + month_year[1];
     document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
     if (current_view === 'year')
     {
         createYearView(current_year);
         document.getElementsByClassName('year_button')[0].classList.add("active_button");
         previous_button = current_view+'_button';
     }
     document.getElementsByClassName("prev")[0].onclick = function() {
        current_month-=1;
         if (current_month > 11){
             current_month = current_month%12;
             current_year+=1;
         }
         else if(current_month < 0){
             current_month += 12;
             current_year -= 1;
         };
         var month_year = getCurrentMonth (current_month, current_year);
         var new_days = getCurrentDays (current_month, current_year);
         document.getElementsByClassName("current_month")[0].innerHTML = month_year[0] + '<br>' + month_year[1];
         document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
     };
     document.getElementsByClassName("next")[0].onclick = function() {
        current_month+=1;
         if (current_month > 11){
             current_month = current_month%12;
             current_year+=1;
         }
         else if(current_month < 0){
             current_month += 12;
             current_year -= 1;
         };
         var month_year = getCurrentMonth (current_month, current_year);
         var new_days = getCurrentDays (current_month, current_year);
         document.getElementsByClassName("current_month")[0].innerHTML = month_year[0] + '<br>' + month_year[1];
         document.getElementsByClassName("weekdays_table")[0].innerHTML = new_days;
    };
    document.getElementsByClassName("view_prev")[0].onclick = function() {
        if (current_view === 'year'){
            current_year -= 1;
            getCurrentViewDate(current_view, current_year,current_month);
            createYearView(current_year);
        }
    };
    document.getElementsByClassName("view_next")[0].onclick = function() {
        if (current_view === 'year'){
            current_year += 1;
            getCurrentViewDate(current_view, current_year,current_month);
            createYearView(current_year);
        }
    };
    document.getElementsByClassName("month_button")[0].onclick = function() {
        current_view = 'month';
        document.getElementsByClassName(previous_button)[0].classList.remove('active_button');
        document.getElementsByClassName('month_button')[0].classList.add('active_button');
        previous_button = current_view+'_button';
        document.getElementsByClassName("view")[0].innerHTML = getCurrentDays (current_month, current_year);
    }
    document.getElementsByClassName("year_button")[0].onclick = function() {
        createYearView(current_year);
        current_view = 'year';
        document.getElementsByClassName(previous_button)[0].classList.remove('active_button');
        document.getElementsByClassName('year_button')[0].classList.add('active_button');
        previous_button = current_view+'_button';
    }

};

