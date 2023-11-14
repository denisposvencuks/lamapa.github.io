/* Кнопка YouTube */
		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'YouTube',
				type: 'trigger',
				//доступно select,input,trigger,title,static
				default: false
			},
			field: {
				name: 'Раздел YouTube',
				//Название подпункта меню
				description: 'Добавляет YouTube в главном меню' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				if(Lampa.Storage.field('YouTube') == false) {
					$('#YouTubeButton').addClass('hide');
				}
				if(Lampa.Storage.field('YouTube') == true) {
					$('#YouTubeButton').removeClass('hide');
				}
				//Lampa.Settings.update();
			}
		});
/* End Кнопка YouTube */
