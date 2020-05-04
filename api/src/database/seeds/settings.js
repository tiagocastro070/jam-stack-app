
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('settings').del()
    .then(function () {
      // Inserts seed entries
      return knex('settings').insert([
        {name: 'site_title', title: 'Title', value: '', description: '', type: 'text', category: 'seo'},
        {name: 'site_slogan', title: 'Business slogan', value: '', description: 'It will be appended to the title.', type: 'text', category: 'seo'},
        {name: 'site_description', title: 'Meta description', value: '', description: 'Describe your business using the right keywords that most identify it and using between ~120 and 158 characters.', type: 'textarea', category: 'seo'},
        {name: 'site_favicon', title: 'Favicon', value: '', description: 'Prepended to the title on mobile devices.', type: 'image', category: 'seo'},
        {name: 'site_image', title: 'Meta default image', value: '', description: 'Used to share on social media.', type: 'image', category: 'seo'},

        {name: 'facebook', title: 'Facebook', value: '', description: '', type: 'text', category: 'social'},
        {name: 'instagram', title: 'Instagram', value: '', description: '', type: 'text', category: 'social'},
        {name: 'twitter', title: 'Twitter', value: '', description: '', type: 'text', category: 'social'},
        {name: 'linkedin', title: 'Linkedin', value: '', description: '', type: 'text', category: 'social'},
        
        {name: 'maintenance', title: 'Maintenance mode', value: 'switch', description: 'The maintenance mode allows you to display a user-friendly notice to your users. <strong>This option will hide all your website content</strong>.', type: '', category: 'advanced'},

        {name: 'custom-setting', title: 'Custom Setting', value: 'text', description: '', type: '', category: 'custom'}
      ]);
    });
};
