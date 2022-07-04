+++
fragment = "content"
weight = 100
+++

# Kinetic Sculpture
Because the lab makerspace does not currently have a UV curing station for the Formlabs SLA 3D printer, therefore rendering it unable to be used, I wanted to help out by making one.

The basic requirements for a curing setup are actually pretty simple:
* Must have relatively even, total coverage of UV light

...and that's really it. To accomplish the requirements of "relatively even" UV light with "total coverage" of the parts as cheaply and effectively as possible, the basic idea is this: a cardboard box with UV LED strips, a turntable, and a lot of mylar. Here is a precise sketch:

The motor does not need to be good at all, in fact, it's probably better energy-wise for it to be slow. The yellow motors will suffice for this project. Soldering up wires and adding a dab of hot glue gives us:

The motor having an output shaft that comes out both sides is problematic for us, as we want it to lie flat. So, we will cut off the part on the wire's side with a hacksaw.

I don't like the idea of glueing the motor to something (especially since that would likely involve sanding to roughen up the smooth, injection-molded plastic surfce just to get glue to stick), so we will use bolts in the two holes to affix the motor to the laser-cut housing.

This gives us information of what details we should include in our CAD of the motor (and gearbox); these details being the general shape (we don't need to be specific with the geometry because it won't be press-fit into the housing), sizes, the output shaft location, and information about the mounting holes we'll use.

###### Cool Caliper & CAD Hacks
For all these *measured* dimensions and not ones that are for custom user values, we can just name our `model parameters` appropriately instead of making a bunch of `user parameters`.

If the part you're measuring was made by a person, it probably has standard, whole number, or common fractional measurements. If you can check it against something (like an M3 bolt), feel free to round if your calipers measure something close but not quite. Make a comment of it along with the actual, measured value in the parameter, though.

After taking a measurement, you may be able to figure out if your calipers drifted a bit by closing them and seeing if they still say zero.

The motor is smaller than the gearbox on all sides, so measuring its length conventionally would be difficult. So, we can measure the gearbox length, zero the calipers, and then extend them to measure the entire motor + gearbox assembly length, only with the gearbox length already subtracted.

Positioning the mounting holes is annoying—you would have to measure the edge-of-circle-to-wall distance because of the nature of calipers, and then constrain the center of the circle to the wall and add the radius and it's just a mess. Instead, you can create a `construction` `centerline` constrained to the midpoint of the body:

Then, place the circle somewhere where it does not snap to anything:

And now, constrain the circle's horizontal distance to the centerline using the center-to-center measurement of the circles (the dimensional constraint will look different, that's because it's controlling the center-to-center distance to where a reflection about of the centerline would be):

This is also very handy because we can now `pattern reflect` this hole about the centerline.

However, measuring the center-to-center distance of holes is often challenging. To get the measurement easily, simply measure the diameter of a hole, zero the calipers, and then measure the outer edge-to-edge distance—it'll already effectively have the radii subtracted twice, giving you the center-to-center distance. Note that this trick only works if the holes are the same size.

###### Cool Caliper & CAD Hacks Over and Out ######


We can just get the center-to-edge distances for other constraints the boring way by measuring the edge-to-edge and then adding half the diameter.

Extrude by the measured height and we have a fancy box with holes in it (even if we weren't planning on putting a spinnable peg there in the assembly, it wouldn't really matter that the output shaft is a hole and not a peg; what's really important is the size and position):

Also, the actual gearbox has some fillets, so we can use our calipers to approximate the fillet radius.

Again, the precise shape of the motor itself is not very important; just that it has pretty accurate dimensions. Because of this, we can approximate it as an ellipse and use the snip tool to cut off the top and bottom:

Extruding:

And now we have our motor!