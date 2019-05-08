$( document ).ready(function() {
    console.log( "ready!" );
	//$( "section" ).hide();
	$( '#language' ).fadeIn();
	$( '#language' ).css("display", "flex");
	
	//���������� filler
	var a = [1, 2, 3, 4, 5];
	var x = [1, 1, 1, 1, 1, 1, 1, 1, 1];
	var time;
	var c1;
	var c2;

	//���������� blinder
	var id;
	var verb;
	//var i = 0;
	
	$( '#header__logo' ).click(function() {
		$( "section" ).hide();
		$( '#language' ).fadeIn();
		$( '#language' ).css("display", "flex");
	});
	$( '#about_button, #about_button_m' ).click(function() {
		$( "section" ).hide();
		$( '#about' ).fadeIn();
		$( '#about' ).css("display", "flex");
		filler(a[4], 200, 1, 1, x[0]);
		filler(a[4], 300, 1, 2, x[1]);
		filler(a[1], 500, 1, 3, x[2]);
		filler(a[2], 300, 1, 4, x[3]);
		filler(a[2], 400, 1, 5, x[4]);
		filler(a[4], 200, 2, 1, x[5]);
		filler(a[4], 300, 2, 2, x[6]);
		filler(a[3], 400, 2, 3, x[7]);
		filler(a[2], 500, 2, 4, x[8]);
		bl_empter();
		if ($(window).width() <= '900'){
			$(".mobile-nav").toggleClass("menu-open");
		}
	});
	$( '#en_button' ).click(function() {
		$( "section" ).hide();
		$( '#about' ).fadeIn();
		$( '#about' ).css("display", "flex");
		filler(a[4], 200, 1, 1, x[0]);
		filler(a[4], 300, 1, 2, x[1]);
		filler(a[1], 500, 1, 3, x[2]);
		filler(a[2], 300, 1, 4, x[3]);
		filler(a[2], 400, 1, 5, x[4]);
		filler(a[4], 200, 2, 1, x[5]);
		filler(a[4], 300, 2, 2, x[6]);
		filler(a[3], 400, 2, 3, x[7]);
		filler(a[2], 500, 2, 4, x[8]);
		bl_empter();
	});
	$( '#projects_button, #projects_button_m' ).click(function() {
		$( "section" ).hide();
		$( '#projects' ).fadeIn();
		$( '#projects' ).css("display", "flex");
		bl_empter();
		empter();
		if ($(window).width() <= '900'){
			$(".mobile-nav").toggleClass("menu-open");
		}
	});
	$( '#resume_button, #resume_button_m' ).click(function() {
		$( "section" ).hide();
		$( '#resume' ).fadeIn();
		$( '#resume' ).css("display", "flex");
		bl_empter();
		empter();
		blinder( $( "#download_blind" ) );
		if ($(window).width() <= '900'){
			$(".mobile-nav").toggleClass("menu-open");
		}
	});
	$( '#contacts_button, #contacts_button_m' ).click(function() {
		$( "section" ).hide();
		$( '#contacts' ).fadeIn();
		$( '#contacts' ).css("display", "flex");
		bl_empter();
		empter();
		blinder( $( "#facebook_blind" ) );
		blinder( $( "#mail_blind" ) );
		if ($(window).width() <= '900'){
			$(".mobile-nav").toggleClass("menu-open");
		}
	});

	//������� �� ���������� ������
	function filler(a, time, c1, c2, x) {
		setInterval(function() {
			if (x <= a) {
				$( "#skill-" + c1 + "-" + c2 + "-" + x ).addClass("skill_full");
			}
			else return;
			x++;
		}, time);
	}
	
	//������� �� ������� ������
	function empter() {
		$( ".skill_empty" ).removeClass("skill_full");
	}
	

	//������� ��� �������� blind
	function blinder(id) {
		$.fn.animate_Text = function() {
			var string = this.text();
			return this.each(function(){
				var $this = $(this);
				$this.html(string.replace(/./g, '<span class="new">$&</span>'));
				$this.find('span.new').each(function(i, el){
					setTimeout(function(){ $(el).addClass('div_opacity'); }, 50 * i);
				});
			});
		};
		$(id).show();
		$(id).animate_Text();
		//������� ���������� �������
		verb = $(id).text();
		console.log( verb );
		console.log( verb.length );
		setTimeout(function(){ $(".last_").css("opacity", "100"); }, 50 * verb.length);
	}

	//������� �������� � �������� ��������� ����.�������
	function bl_empter() {
		$(".last_").css("opacity", "0");
	}

	//���������� ��������� ����
	$(function(){
		$("#button").on("click", function(){
			$(".mobile-nav").toggleClass("menu-open");
		});
	});



});