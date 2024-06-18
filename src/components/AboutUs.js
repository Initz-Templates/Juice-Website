import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        {/* Our Story Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zs2jxUsnjP1Ec6T0CBTM_ulnqU2JkLcwPQ&s"
              alt="Our Story"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                At Juice Paradise, we started with a simple mission: to bring the freshest, most delicious juices to our community. What began at a local farmer's market has grown into a beloved juice shop known for quality and innovation.
                <br /><br />
                Over the years, we've expanded to offer a variety of juices, smoothies, and wellness shots. Each product is crafted with care, using the highest quality ingredients sourced from local farms.
                <br /><br />
                Sustainability and community support are core values. We've built lasting relationships with our suppliers and customers who share our passion for health and wellness.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Mission Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lo7NKuGWhjWFUwoQg7ORXNOxA6JPNl-2dw&s"
              alt="Our Mission"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our mission is to provide healthy, refreshing juices made from the finest ingredients. We promote sustainability, support local farmers, and encourage a lifestyle of wellness.
                <br /><br />
                Each juice is packed with nutrients and flavor, designed to help you feel your best. Whether detoxing, boosting immunity, or simply enjoying a delicious beverage, we cater to all needs.
                <br /><br />
                We continuously innovate, expanding our menu with new flavors while maintaining a commitment to quality and freshness.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Team Section */}
        <Grid item xs={12}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611807527311-a6f0ffaf5138%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Djuice%252Bshop%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8anVpY2UlMjBzaG9wfGVufDB8fHx8MTcxODM5MTE0M3ww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
              alt="Our Team"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our team is diverse, sharing a passion for health and wellness. From skilled juice makers to friendly customer service staff, everyone at Juice Paradise is committed to providing exceptional experiences.
                <br /><br />
                Our juice makers are trained professionals with expertise in nutrition and flavor combinations. They create juices that are both nutritious and delicious.
                <br /><br />
                Our customer service team is always ready to assist, whether in-store or online. We value strong customer relationships and are dedicated to supporting you every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
