$(document).ready(function () {
    $('.layout .sidebar ul li button').click(function () {
        if ($(this).parents('li').hasClass('active') && $(this).parents('li').hasClass('open')) {
            $('.layout .sidebar').removeClass('open');
            $('.layout .sidebar ul li').removeClass('active').removeClass('open');
            return false;
        }
        $('.layout .sidebar').addClass('open');
        $('.layout .sidebar ul li').removeClass('active').removeClass('open');
        $(this).parents('li').addClass('active').addClass('open');
        $('.layout .sidebar .support').removeClass('open');
    });
    $('.layout .sidebar ul li .submenu .closemenu').click(function () {
        $('.layout .sidebar').removeClass('open');
        $('.layout .sidebar ul li').removeClass('active').removeClass('open');
    });
    $('.layout .sidebar .callsupport').click(function () {
        if ($('.layout .sidebar .support').hasClass('open')) {
            $('.layout .sidebar .support').removeClass('open');
            $('.layout .sidebar').removeClass('open');
            return false;
        }
        $('.layout .sidebar .support').addClass('open');
        $('.layout .sidebar').addClass('open');
        $('.layout .sidebar ul li').removeClass('active').removeClass('open');
    });
    $('.layout .sidebar .support .head .closesupport').click(function () {
        $('.layout .sidebar .support').removeClass('open');
        $('.layout .sidebar').removeClass('open');
    });
    /* Scrollbars */
    $(".layout .sidebar").mCustomScrollbar({scrollbarPosition: 'outside', autoHideScrollbar: true});
    $(".layout .sidebar .support .messages").mCustomScrollbar({autoHideScrollbar: true});
    $(".layout .sidebar .support .messages").mCustomScrollbar("scrollTo", ".layout .sidebar .support .messages .message:last-child");
    $(".replaychat .template .templates .list").mCustomScrollbar({
        scrollbarPosition: 'outside',
        autoHideScrollbar: true
    });
    $(".replaychat .template .templates .list").mCustomScrollbar("scrollTo", ".layout .main .replaychat .template .templates .list .item:last-child");
    $(".replaychat .chatbox .messages").mCustomScrollbar({autoHideScrollbar: true, live: true});
    $(".replaychat .chatbox .messages").mCustomScrollbar("scrollTo", ".replaychat .chatbox .messages .message:last-child");
    $(".layout .main .notes .notelist .list").mCustomScrollbar({
        autoHideScrollbar: true,
        live: true,
        scrollbarPosition: 'outside'
    });
    $(".layout .main .notes .notelist .list").mCustomScrollbar("scrollTo", ".layout .main .notes .notelist .list .item:last-child");
    $(".layout .main .dashboard .quickaccess .list").mCustomScrollbar({
        autoHideScrollbar: true,
        live: true,
        scrollbarPosition: 'outside'
    });
    $(".layout .main .dashboard .quickaccess .list").mCustomScrollbar("scrollTo", ".layout .main .dashboard .quickaccess .list ul li:last-child");
    $(".layout .sidebar .support .messages").mCustomScrollbar({autoHideScrollbar: true});
    $(".layout .sidebar .support .messages").mCustomScrollbar("scrollTo", ".layout .sidebar .support .messages .message:last-child");
    $(".layout .main .content .support .replay .box .messages").mCustomScrollbar({autoHideScrollbar: true});
    $(".layout .main .content .support .template .templates .list").mCustomScrollbar({
        scrollbarPosition: 'outside',
        autoHideScrollbar: true
    });
    $(".layout .main .content .support .template .templates .list").mCustomScrollbar("scrollTo", ".layout .main .content .support .template .templates .list .item:last-child");
    /**/
    $('.replaychat .templates .list .item .action button.deletetemplate,.layout .main .content .support .template .templates .list .item .action button.deletetemplate').click(function () {
        $(this).parents('.item').fadeOut(500, function () {
            $(this).remove();
            $(".replaychat .template .templates .list").mCustomScrollbar('update');
        });
    });
    $('.replaychat .chatbox .messages,.content .support .replay .box .messages').on('click', 'p', function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        $temp.remove();
        $(this).addClass('copy');
    });
    $('.replaychat .chatbox .messages,.content .support .replay .box .messages').on('mouseleave', '.message', function () {
        $(this).find('p').removeClass('copy');
    });
    $('.replaychat .template .templates .list .item p').click(function () {
        var text = $(this).text();
        $('.replaychat .chatbox .sendbox input').val(text);
        $('.replaychat .chatbox .sendbox button').prop('disabled', false);
    });
    $('.replaychat .chatbox .head .action .closechat').click(function () {
        $('.replaychat').removeClass('open');
        $('.layout .sidebar').removeClass('opensupport');
    });
    $('.layout .main .header .actions .btn.add,.table tbody tr td button.openchat').click(function () {
        $('.replaychat').addClass('open');
        $('.layout .sidebar').addClass('opensupport');
        return false;
    });
    /* replay */
    $('.layout .main .content .support .template .templates .list .item p').click(function () {
        var text = $(this).text();
        $('.layout .main .content .support .replay .form-group textarea').val(text);
        $('.layout .main .content .support .replay .box .button-group button').prop('disabled', false);
        $('html, body').animate({
            scrollTop: $(".layout .main .content .support .replay").offset().top
        }, 1000);
    });
    $('.layout .main .content .support .replay .box .form-group textarea').keyup(function () {
        var text = $(this).val();
        if (text != '') {
            $('.layout .main .content .support .replay .box .button-group button').prop('disabled', false);
        } else {
            $('.layout .main .content .support .replay .box .button-group button').prop('disabled', true);
        }
    });
    $('.layout .main .content .support .replay .box .button-group button').click(function () {
        var text = $('.layout .main .content .support .replay .box .form-group textarea').val();
        if (text != '') {
            $('.layout .main .content .support .replay .box .form-group textarea').val('');
            var data = $('<div class="message sup"><div><p>' + text + '<button type="button" class="copymessage"></button></p><span>الان</span></div></div>');
            $('.layout .main .content .support .replay .box .messages .mCSB_container').prepend(data);
        }
    });
    /**/
    if ($('#userchart').length) {
        var ctx = document.getElementById('userchart').getContext('2d');
        //ctx.canvas.width = 200;

        var options = {
            title: {
                display: false
            },
            legend: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                rtl: true,
                backgroundColor: "rgba(255,255,255,1)",
                borderColor: "rgba(217,217,217,1)",
                borderWidth: 1,
                displayColors: false,
                titleFontFamily: 'iranyekan',
                titleFontSize: 14,
                footerFontFamily: 'iranyekan',
                footerFontSize: 14,
                bodyFontFamily: 'iranyekan',
                bodyFontColor: '#676F74',
                bodyFontSize: 14,
                titleFontColor: '#676F74',
                footerFontColor: '#676F74',
                callbacks: {
                    label: function (tooltipItems, data) {
                        if (!$('body').hasClass('en'))
                            return data.datasets[0].label + ' : ' + tooltipItems.yLabel.toString().toFaDigit();
                        else
                            return data.datasets[0].label + ' : ' + tooltipItems.yLabel;
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            spanGaps: false,
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 0
                }
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        autoSkip: false,
                        maxRotation: 0
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false
                    }
                }]
            }
        };
        var gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(82,192,239,1)');
        gradient.addColorStop(1, 'rgba(72,177,222,1)');
        var userchart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["دی", "بهمن", "اسفند", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", "فروردین"],
                datasets: [{
                    label: "کاربر",
                    backgroundColor: gradient,
                    borderColor: 'rgba(0,0,0,0)',
                    data: [156, 143, 63, 106, 109, 128, 98, 128, 98, 95, 81, 128, 160, 22, 80, 46],
                    fill: 'start'
                }]
            },
            options: options
        });
    }
    $('.layout .main .chart .box ul li').click(function () {
        $('.layout .main .chart .box ul li').removeClass('active');
        $(this).addClass('active');
        $('.layout .main .chart .box span').text($(this).data('info'));
        if ($(this).data('id') == "orders") {
            userchart.data.datasets[0].label = "سفارش";
            userchart.data.datasets[0].data = [116, 163, 163, 50, 129, 108, 198, 20, 35, 195, 131, 118, 140, 122, 20, 146];
        } else if ($(this).data('id') == "users") {
            userchart.data.datasets[0].label = "کاربر";
            userchart.data.datasets[0].data = [156, 143, 63, 106, 109, 128, 98, 128, 98, 95, 81, 128, 160, 22, 80, 46];
        }
        userchart.update();
    });
    $(".layout .main .notes .textbox textarea").on('input', function () {
        if ($(this).val() !== "")
            $('.layout .main .notes .textbox .bottom button').prop('disabled', false);
        else
            $('.layout .main .notes .textbox .bottom button').prop('disabled', true);
    });
    $(".layout .main .notes .textbox textarea").focusin(function () {
        $(".layout .main .notes .textbox").addClass('open');
        $(".layout .main .notes .notelist .list").addClass('opentextbox');
        $(".layout .main .notes .notelist .list").mCustomScrollbar('update');
    });
    $('.layout .main .notes .textbox .bottom .notestatus ul li').click(function () {
        $('.layout .main .notes .textbox .bottom .notestatus ul li').removeClass('active');
        $(this).addClass('active');
        $('.layout .main .notes .textbox input[type=hidden]').val($(this).data('id'));
    });
    $('.layout .main .notes .notelist .notestatus ul li').click(function () {
        var className = $(this).data('id');
        if ($(this).hasClass('active')) {
            $('.layout .main .notes .notelist .notestatus ul li').removeClass('active');
            $('.layout .main .notes .notelist .list .mCSB_container .item').show();
            return false;
        }
        $('.layout .main .notes .notelist .notestatus ul li').removeClass('active');
        $(this).addClass('active');
        $('.layout .main .notes .notelist .list .mCSB_container .item.' + className).show();
        $('.layout .main .notes .notelist .list .mCSB_container .item').not('.' + className).fadeOut();
    });
    $('.layout .main .notes .notelist .list').on('click', '.deletenote', function () {
        $(this).parents('.item').fadeOut(500, function () {
            $(this).remove();
            $(".layout .main .notes .notelist .list").mCustomScrollbar('update');
        });
    });
	
    $(document).on('click', function (event) {
        if (!$(event.target).closest(".layout .main .notes .textbox").length) {
            $(".layout .main .notes .textbox").removeClass('open');
            $(".layout .main .notes .notelist .list").removeClass('opentextbox');
            $(".layout .main .notes .notelist .list").mCustomScrollbar('update');
        }
    });
    /* quick access */
    $(".layout .main .dashboard .quickaccess ul").sortable({
        connectWith: '.layout .main .dashboard .quickaccess .head span',
        placeholder: "placeholder",
        helper: 'clone',
        appendTo: ".itemdrag ul",
        revert: true,
        over: function (ev, ui) {
            $('.layout .main .dashboard .quickaccess .list').addClass('itemover');
        },
        out: function (ev, ui) {
            $('.layout .main .dashboard .quickaccess .list').removeClass('itemover');
        },
        receive: function (ev, ui) {
            $('.layout .main .dashboard .quickaccess .list').removeClass('itemover');
        },
    }).disableSelection();
    $(".layout .sidebar ul li .submenu ul li").draggable({
        appendTo: ".itemdrag ul",
        connectToSortable: ".layout .main .dashboard .quickaccess ul",
        helper: "clone",
        revert: "invalid",
        zIndex: 99999,
        refreshPositions: true,
        start: function (event, ui) {
            $('.layout .sidebar').removeClass('open').removeClass('openmenu');
            $('.layout .sidebar ul li').removeClass('active').removeClass('open').addClass('stuck');
        }
    });
    $(".layout .main .dashboard .quickaccess .head span").droppable({
        accept: ".quickaccess ul > li",
        tolerance: "touch",
        activeClass: 'active',
        hoverClass: 'active',
        greedy: true,
        over: function (event, ui) {
            ui.helper.addClass('delete').removeClass('out');
        },
        out: function (event, ui) {
            ui.helper.addClass('out');
        },
        drop: function (event, ui) {
            ui.helper.addClass('delete');
            ui.draggable.remove();
            return false;
        }
    });
    /* menu mobile */
    if ($(window).width() <= 1023) {
        $('.layout .main .header .openmenu').click(function () {
            $('.layout .sidebar').addClass('openmenu');
        });
        $('.layout .main .header .opennotes').click(function () {
            $('.layout .main .notes').addClass('open');
            $('.layout .sidebar').addClass('opennotes');
        });
        $('.layout .main .notes button.closenotes').click(function () {
            $('.layout .main .notes').removeClass('open');
            $('.layout .sidebar').removeClass('opennotes');
        });
        $("body").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    event.stopPropagation();
                    if ($('.layout .main .notes').hasClass('open')) {
                        $('.layout .main .notes').removeClass('open');
                        $('.layout .sidebar').removeClass('opennotes');
                    } else {
                        $('.layout .sidebar').addClass('openmenu').removeClass('opennotes');
                    }
                } else if (direction == "right") {
                    event.stopPropagation();
                    $('.layout .sidebar').removeClass('openmenu').removeClass('opennotes');

                }
            }
        });

        $(".layout .sidebar").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "right" && $('.layout .sidebar').hasClass('openmenu')) {
                    event.stopPropagation();
                    $('.layout .sidebar').removeClass('openmenu').removeClass('opennotes');
                }
            }
        });
    }
    /* timer */
    var timer = null;
    $('.entrytimer .timer .actions button.start').click(function () {
        $(this).prop('disabled', true);
        $('.entrytimer .timer .actions button.finish').prop('disabled', false);
        localStorage.setItem("timerstart", +new Date());
        var timerstart = localStorage.getItem("timerstart");
        timer = setInterval(function () {
            var delta = Math.abs(timerstart - +new Date()) / 1000;
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            if (hours <= 9) {
                hours = "0" + hours;
            }
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            if (minutes <= 9) {
                minutes = "0" + minutes;
            }
            var seconds = Math.floor(delta % 60);
            if (seconds <= 9) {
                seconds = "0" + seconds;
            }
            $('.layout .main .dashboard .entrytimer .timer span.time').text(hours + ":" + minutes + ":" + seconds);
        }, 1000);
    });
    $('.entrytimer .timer .actions button.finish').click(function () {
        clearInterval(timer);
        $(this).prop('disabled', true);
        $('.entrytimer .timer .actions button.start').prop('disabled', false);
    });
    /* form group */
    $('.form-group .stepup').click(function (e) {
        e.preventDefault();
        $(this).parent().find('input[type=number]')[0].stepUp();
    });
    $('.form-group .stepdown').click(function (e) {
        e.preventDefault();
        $(this).parent().find('input[type=number]')[0].stepDown();
    });
    $(".form-group select").select2({
        width: '100%',
        dir: 'rtl',
        "language": {
            "noResults": function () {
                if ($('body').hasClass('en'))
                    return "no results";
                else
                    return "یافت نشد";
            }
        },
        escapeMarkup: function (markup) {
            return markup;
        }
    });
    $('.form-group select').on('select2:opening', function (e) {
        $(this).parents('.form-group').addClass('open');
        if ($('body').hasClass('en'))
            $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'search');
        else
            $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'جستجو');
        if ($(this).parents('.form-group').hasClass('gray'))
            $(this).data('select2').$dropdown.addClass('gray');

    });
    $('.form-group select').on('select2:closing', function (e) {
        $(this).parents('.form-group').removeClass('open');
        if ($(this).parents('.form-group').hasClass('gray'))
            $(this).data('select2').$dropdown.removeClass('gray');
    });
    $('.form-group select').on('select2:open', function (e) {
        var width = $(this).parents('.form-group').outerWidth();
        var dropdownwidth = $(this).data('select2').$results.width();
        if (Math.ceil(dropdownwidth) == 170 && !$('body').hasClass('en')) {
            $(this).data('select2').$dropdown.css('marginLeft', '-' + Math.abs(width - 170) + 'px');
        } else {
            $(this).data('select2').$dropdown.css('marginLeft', 0);
        }
    });
    /* profile upload image */
    $('.imageupload button').on('click touchstart', function (e) {
        $(this).parent().find('input[type=file]').trigger('click');
        return false;
    });
    $(".imageupload input").change(function () {
        var _this = this;
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(_this).parent().find('img').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        } else {
            $(_this).parent().find('img').attr('src', '');
        }
    });
    $('.form-group input[type=password]').keyup(function () {
        var password = $(this).val();
        var strength = 0;

        if (password.length < 7) {
            $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('غیر قابل قبول');
            $(this).parents('.form-group').find(".checklist .Strength ul li").removeClass('active');
            return;
        }

        if (password.length > 7) {
            strength += 1;
            $(this).parents('.form-group').find('.checklist .list li.c8').addClass('active');
        } else {
            $(this).parents('.form-group').find('.checklist .list li.c8').removeClass('active');
        }

        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1
            $(this).parents('.form-group').find('.checklist .list li.bw').addClass('active');
        } else {
            $(this).parents('.form-group').find('.checklist .list li.bw').removeClass('active');
        }

        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
            strength += 1
            $(this).parents('.form-group').find('.checklist .list li.hn').addClass('active');
        } else {
            $(this).parents('.form-group').find('.checklist .list li.hn').removeClass('active');
        }

        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1
            $(this).parents('.form-group').find('.checklist .list li.sc').addClass('active');
        } else {
            $(this).parents('.form-group').find('.checklist .list li.sc').removeClass('active');
        }

        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

        if (password.length > 15 && strength >= 4) {
            strength += 1;
        }
        if ($(this).data('re')) {
            var id = $(this).data('re');
            if ($('.form-group input[type=password]#' + id).length && $('.form-group input[type=password]#' + id).val() == password) {
                $(this).parents('.form-group').find('.checklist .list li.rp').addClass('active');
            } else {
                $(this).parents('.form-group').find('.checklist .list li.rp').removeClass('active');
            }
        }

        $(this).parents('.form-group').find(".checklist .Strength ul li").removeClass('active');
        $(this).parents('.form-group').find(".checklist .Strength ul li:lt(" + strength + ")").addClass('active');
        if (strength < 2) {
            if ($('body').hasClass('en'))
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('weak');
            else
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('ضعیف');
        } else if (strength == 2) {
            if ($('body').hasClass('en'))
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('average');
            else
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('متوسط');
        } else if (strength <= 5) {
            if ($('body').hasClass('en'))
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('strong');
            else
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('قوی');
        } else {
            if ($('body').hasClass('en'))
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('very strong');
            else
                $(this).parents('.form-group').find('.checklist .Strength ul li.message').text('بسیار قوی');
        }
    });
    $('.form-group input[type=password]').focusin(function () {
        $(this).parents('.form-group').addClass('openchecklist');
    });
    $('.form-group input[type=password]').focusout(function () {
        $(this).parents('.form-group').removeClass('openchecklist');
    });
    /* date picker*/
    if ($('body').hasClass('en'))
        $(".form-group input.date").pDatepicker({calendarType: 'gregorian', format: 'L', responsive: false});
    else
        $(".form-group input.date").pDatepicker({format: 'L', responsive: false});
    /* form group addable*/
    $('.form-addable button.add').click(function () {
        if ($(this).parents('.form-addable').find('.item').eq(0).length) {
            var data = $(this).parents('.form-addable').find('.item').eq(0)[0].outerHTML;
            $(this).parents('.form-addable').find('.data').append($(data).hide());
            $(this).parents('.form-addable').find('.data .item:last-child').fadeIn();
        }
    });
    $('.form-addable .data').on('click', 'button.deleteform', function () {
        if ($('.form-addable .data .item').length > 1)
            $(this).parents('.item').fadeOut(500, function () {
                $(this).remove()
            });
    });
    /* form group limited */
    $('.form-group.limited').each(function () {
        var limit = $(this).data('limit');
        var _this = this;
        $(this).find('.limit').html('0/<b>' + limit + '</b>');
        $(this).find('textarea').keydown(function () {
            var text = $(this).val();
            if (text.length <= limit) {
                $(_this).find('.limit').html(text.length + '/<b>' + limit + '</b>');
            } else {
                var text = text.slice(0, limit);
                $(this).val(text);
            }
        });
    });
    /* closablelist */
    $('.closablelist li button').click(function () {
        $(this).parent().fadeOut(500, function () {
            $(this).remove()
        });
    });
    /* tablist */
    $('.tablist .tabs button:not(.more),.tablist .tabs .more li').click(function () {
        var id = $(this).data('id');
        $(this).parents('.tablist').removeClass('empty');
        $(this).parents('.tablist').find('.tabs button').removeClass('active');
        $(this).parents('.tablist').find('.tabs .more li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tablist').find('.tab').hide();
        $(this).parents('.tablist').find('.tab.tab' + id).show();
        if (!$(this).parents('.tablist').find('.tab.tab' + id).length)
            $(this).parents('.tablist').addClass('empty');
    });
    $('.tablist .tabs .more li').click(function () {
        $(this).parents('.tablist').find('.tabs .more ul').fadeOut();
    });
    $('.tablist .tabs .more button.more').click(function () {
        $(this).parents('.tablist').find('.tabs .more ul').fadeToggle();
    });
    $('.tablesimple.tabs button:not(.more),.tablesimple.tabs .more li').click(function () {
        var id = $(this).data('id');
        $(this).parents('.databox').removeClass('empty');
        $(this).parents('.tablesimple.tabs').find('button').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.databox').find('.tablesimple.tab').hide();
        $(this).parents('.databox').find('.tablesimple.tab.tab' + id).show();
        if (!$(this).parents('.databox').find('.tablesimple.tab.tab' + id).length)
            $(this).parents('.databox').addClass('empty');
    });
    $('.tablesimple.tabs .more li').click(function () {
        $(this).parents('.tablesimple').find('.more ul').fadeOut();
    });
    $('.tablesimple.tabs .more button.more').click(function () {
        $(this).parents('.tablesimple').find('.more ul').fadeToggle();
    });
    $('.tablesimple tr td button.delete').click(function () {
        $(this).parents('tr').fadeOut(500, function () {
            $(this).remove()
        });
    });
    /* sms pay */
    $('.layout .main .dashboard .smspack .box .actions input').keyup(function () {
        var count = $(this).val();
        if ($('body').hasClass('en'))
            $('.layout .main .dashboard .smspack .box .actions button.pay').text('pay ' + count + ' $');
        else
            $('.layout .main .dashboard .smspack .box .actions button.pay').text('پرداخت ' + (count).toString().toFaDigit() + ' تومان');
    });
    /* body click hide replychat */
    $('body').click(function (e) {
        var target = $(e.target);
        if (!$(event.target).closest(".replaychat").length) {
            $('.replaychat').removeClass('open');
            $('.layout .sidebar').removeClass('opensupport');
        }
        if (!$(event.target).closest(".sidebar *").length) {
            $('.layout .sidebar').removeClass('open');
            $('.layout .sidebar ul li').removeClass('active').removeClass('open');
            $('.layout .sidebar .support').removeClass('open');
        }
    });
    /* active send button if inputs are not empty */
    $('.replaychat .chatbox .sendbox textarea').keyup(function () {
        var text = $(this).val();
        if (text != '') {
            $('.replaychat .chatbox .sendbox button').prop('disabled', false);
        } else {
            $('.replaychat .chatbox .sendbox button').prop('disabled', true);
        }
    });
    $('.replaychat .template .sendbox textarea').keyup(function () {
        var text = $(this).val();
        if (text != '') {
            $('.replaychat .template .sendbox button').prop('disabled', false);
        } else {
            $('.replaychat .template .sendbox button').prop('disabled', true);
        }
    });
    $('.layout .main .content .support .sendbox textarea').keyup(function () {
        var text = $(this).val();
        if (text != '') {
            $('.layout .main .content .support .sendbox button').prop('disabled', false);
        } else {
            $('.layout .main .content .support .sendbox button').prop('disabled', true);
        }
    });
    $('.layout .sidebar .support .sendmessage textarea').keyup(function () {
        var text = $(this).val();
        if (text != '') {
            $('.layout .sidebar .support .sendmessage button').prop('disabled', false);
        } else {
            $('.layout .sidebar .support .sendmessage button').prop('disabled', true);
        }
    });
    /* table selectall */
    $('table thead th .checkbox.select').click(function () {
        if ($(this).prop('checked') === true) {
            $(this).parents('table').find('tbody tr td input[type=checkbox]').prop('checked', true);
            $('.layout .main .header .actions button.delete').prop('disabled', false);
        } else {
            $(this).parents('table').find('tbody tr td input[type=checkbox]').prop('checked', false);
            $('.layout .main .header .actions button.delete').prop('disabled', true);
        }
    });
    $('table tbody tr td input[type=checkbox]').click(function () {
        if ($(this).prop('checked') === true) {
            $('.layout .main .header .actions button.delete').prop('disabled', false);
        } else {
            if ($(this).parents('table').find('tbody tr td input[type=checkbox]:checked').length == 0)
                $('.layout .main .header .actions button.delete').prop('disabled', true);
        }
    });
    $('.layout .main .header .actions button.delete').click(function () {
        if ($('table').length) {
            $('.layout .main .header .actions button.delete').prop('disabled', false);
            $('table tbody tr td input[type=checkbox]:checked').each(function () {
                $(this).parents('tr').fadeOut(500, function () {
                    $(this).remove();
                });
            });
        }
    });
    /* input type direction*/
    $('input[type=text],textarea').keyup(function () {
        if ($(this).val().length == 1) {
            var x = new RegExp("[\x00-\x80]+");
            var isAscii = x.test($(this).val());
            if (isAscii) {
                $(this).css("direction", "ltr");
            } else {
                $(this).css("direction", "rtl");
            }
        }
    });
    /* input only number */
    $('input[type=text],textarea').keyup(function () {
        if ($(this).val().length == 1) {
            var x = new RegExp("[\x00-\x80]+");
            var isAscii = x.test($(this).val());
            if (isAscii) {
                $(this).css("direction", "ltr");
            } else {
                $(this).css("direction", "rtl");
            }
        }
    });
    $('.form-group.onlynumber input').keypress(function (event) {
        var controlKeys = [8, 9, 13, 35, 36, 37, 39];
        var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
        if (!event.which ||
            (48 <= event.which && event.which <= 57) || isControlKey) {
            return;
        } else {
            event.preventDefault();
        }
    });
    /* support open*/
    $('.layout .sidebar .support .sendmessage textarea').focusin(function () {
        $('.layout .sidebar .support .sendmessage').addClass('open');
    });
    $('.layout .sidebar .support .sendmessage textarea').focusout(function () {
        $('.layout .sidebar .support .sendmessage').removeClass('open');
    });
    $('.layout .main .content .support .sendbox textarea').focusin(function () {
        $('.layout .main .content .support .sendbox').addClass('open');
    });
    $('.replaychat .sendbox textarea').focusin(function () {
        $('.replaychat .sendbox').addClass('open');
        $('.replaychat .chatbox .messages').addClass('open');
    });
    $('.replaychat .sendbox textarea').focusout(function () {
        $('.replaychat .sendbox').removeClass('open');
        $('.replaychat .chatbox .messages').removeClass('open');
    });
    $('.layout .main .content .support .sendbox textarea').focusout(function () {
        $('.layout .main .content .support .sendbox').removeClass('open');
    });
});
$(document).keyup(function (e) {
    if (e.key === "Escape") {
        $('.replaychat').removeClass('open');
        $('.layout .sidebar').removeClass('opensupport');
    }
});
String.prototype.toFaDigit = function () {
    return this.replace(/\d+/g, function (digit) {
        var ret = '';
        for (var i = 0, len = digit.length; i < len; i++) {
            ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
        }

        return ret;
    });
};
