/* Кнопка YouTube */
		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'vlc',
				type: 'trigger',
				//доступно select,input,trigger,title,static
				default: false
			},
			field: {
				name: 'Раздел vlc',
				//Название подпункта меню
				description: 'Добавляет vlc в главном меню' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				if(Lampa.Storage.field('vlc') == false) {
					$('#YouTubeButton').addClass('hide');
				}
				if(Lampa.Storage.field('vlc') == true) {
					$('#YouTubeButton').removeClass('hide');
				}
				//Lampa.Settings.update();
			}
		});
/* End Кнопка YouTube */
