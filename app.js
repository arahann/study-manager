Vue.component('total-progress-section', {
    props : ['totalp']
    , template : 
    '<section class="card" style="width: 20rem;">\
      <h1 class="card-title">전체</h1>\
      <div class="progress">\
        <div :class="\'progress-bar w-\' + totalp.total_progress_percent" id="total" role="progressbar" :aria-valuenow="totalp.total_progress" :aria-valuemin="totalp.total_min" :aria-valuemax="totalp.total_max">\
          {{totalp.total_progress_percent}} ({{totalp.total_progress}}/{{totalp.total_max}})\
        </div>\
      </div>\
    </section>'
});

Vue.component('course-progress-section', {
    props : ['course']
    , template : 
        '<section class="card" style="width: 20rem;" >\
            <h1 class="card-title">{{course.course_title}}</h1>\
            <section class="card">\
                <div class="progress">\
                    <div :class="\'progress-bar w-\' + course.progress_percent" role="progressbar" :aria-valuenow="course.progress" :aria-valuemin="course.progress_min" :aria-valuemax="course.progress_max">\
                        {{course.progress_percent}}%\
                    </div>\
                </div>\
            </section>\
        </section>'
});

Vue.component('course-detail', {
   props : ['detail'] 
   , template : 
        '<section class="card" >\
            <h1>{{detail.title}}</h1>\
            <div class="container">\
                <div v-for="log in detail.logs" :key="log.no" class="form-check form-check-inline">\
                    <label class="custom-control custom-checkbox">\
                        <input class="custom-control-input" v-if="log.isWatched" type="checkbox" autocomplete="off" checked>\
                        <input class="custom-control-input" v-else type="checkbox" autocomplete="off" >\
                        <span class="custom-control-indicator"></span>\
                        <span class="custom-control-description">{{log.no}}강</span>\
                    </label>\
                </div>\
            </div>\
        </section>'
});

var total = new Vue({
    el : "#total-group-section",
    data : { 
        totalv : {
            total_progress_percent : 50
            , total_progress : 500
            , total_min : 0
            , total_max : 1000
        }
    }
})

var progress = new Vue({
    el : '#course-group-section',
    data : {
        courses : [
            {
                course_title : '국어'
                , progress_percent : 100
                , progress : 100
                , progress_min : 0
                , progress_max : 100
            }, {
                course_title : '영어'
                , progress_percent : 20
                , progress : 40
                , progress_min : 0
                , progress_max : 200
            }, {
                course_title : '한국사'
                , progress_percent : 70
                , progress : 140
                , progress_min : 0
                , progress_max : 200
            }, {
                course_title : '행정학'
                , progress_percent : 5
                , progress : 10
                , progress_min : 0
                , progress_max : 200
            }, {
                course_title : '사회'
                , progress_percent : 0
                , progress : 0
                , progress_min : 0
                , progress_max : 200
            }
        ]
    }
});

var detail = new Vue({
    el : '#detail-section',
    data : {
        course_logs : [
            {
                title : '국어'
                , total : 10
                , logs : [
                    {
                        no : 1
                        , watchDate : 2017-1-1
                        , isWatched : true
                    }, {
                        no : 2
                        , watchDate : 2017-3-30
                        , isWatched : true
                    }, {
                        no : 3
                        , watchDate : '2017-12-31'
                        , isWatched : true
                    }, {
                        no : 4
                        , watchDate : '2017-12-1'
                        , isWatched : true
                    }, {
                        no : 5
                        , watchDate : '2015-5-5'
                        , isWatched : true
                    }, {
                        no : 6
                        , watchDate : 2015-5-5
                        , isWatched : false
                    }, {
                        no : 7
                        , watchDate : ''
                        , isWatched : false
                    }, {
                        no : 8
                        , watchDate : '2015-5-5'
                        , isWatched : true
                    }, {
                        no : 9
                        , watchDate : '2015-5-5'
                        , isWatched : true
                    }, {
                        no : 10
                        , watchDate : '2015-5-5'
                        , isWatched : true
                    }
                ]
            }, {
                title : '영어'
                , total : 20
                , logs : [
                    {
                        no : 1
                        , watchDate : '2017-1-1'
                        , isWatched : false
                    }, {
                        no : 2
                        , watchDate : '2017-3-30'
                        , isWatched : false
                    }, {
                        no : 3
                        , watchDate : '2017-12-31'
                        , isWatched : false
                    }, {
                        no : 4
                        , watchDate : '2017-12-1'
                        , isWatched : true
                    }, {
                        no : 5
                        , watchDate : '2015-5-5'
                        , isWatched : false
                    }, {
                        no : 6
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 7
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 8
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 9
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 10
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 11
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 12
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 13
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 14
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 15
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 16
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 17
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 18
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 19
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }, {
                        no : 20
                        , watchDate : '2017-12-1'
                        , isWatched : false
                    }
                ]
            }
        ]
    }
});